import { useEffect, useState } from "react"
import { SearchBar } from "./components/SearchBar"
import { CurrentWeather } from "./components/CurrentWeather";

interface WeatherData {
  temperature: number;
  description: string;
  city: string;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
}

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`
      );

      if (!response.ok) {
        throw new Error("No search results found.");
      }

      const data = await response.json();
      const weatherData: WeatherData = {
        temperature: data.current.temp_c,
        description: data.current.condition.text,
        city: data.location.name,
        feelsLike: data.current.feelslike_c,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
        precipitation: data.current.precip_mm,
      };
      setWeather(weatherData);
      console.log(weatherData);
      setLoading(false);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Default search for "Paris"
    handleSearch("Paris");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="px-6 py-4 text-xl font-bold text-gray-800 border-b border-gray-200">
        Weather Now
      </header>

      <main>
        <section className="px-6 py-4 text-center font-bold text-3xl">How's the sky looking today?</section>

        <SearchBar onSearch={handleSearch} />
        
        {loading && (
          <div className="mx-6 my-4 text-center">
            <p className="text-gray-600">Loading...</p>
          </div>
        )}

        {error && (
          <div className="mx-6 my-4 text-center bg-red-50 border border-red-200 p-4 rounded-lg">
            <p className="text-red-600 font-semibold">{error}</p>
          </div>
        )}

        {weather && <CurrentWeather {...weather} />}
      </main>
    </div>
  )
}

export default App

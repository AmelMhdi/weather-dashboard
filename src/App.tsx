import { useEffect, useState } from "react"
import { SearchBar } from "./components/SearchBar"
import { CurrentWeather } from "./components/CurrentWeather";

interface WeatherData {
  temperature: number;
  temperatureF: number;
  description: string;
  city: string;
  feelsLike: number;
  feelsLikeF: number;
  humidity: number;
  windSpeed: number;
  windSpeedMph: number;
  precipitation: number;
  precipitationIn: number;
}

interface DailyForecast {
  date: string;
  maxTemp: number;
  minTemp: number;
  maxTempF: number;
  minTempF: number;
  condition: string;
}

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [units, setUnits] = useState<"metric" | "imperial">("metric");
  const [forecast, setForecast] = useState<DailyForecast[]>([]);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=7`
      );

      if (!response.ok) {
        throw new Error("No search results found.");
      }

      const data = await response.json();
      console.log(data);

      const weatherData: WeatherData = {
        temperature: data.current.temp_c,
        temperatureF: data.current.temp_f,
        description: data.current.condition.text,
        city: data.location.name,
        feelsLike: data.current.feelslike_c,
        feelsLikeF: data.current.feelslike_f,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
        windSpeedMph: data.current.wind_mph,
        precipitation: data.current.precip_mm,
        precipitationIn: data.current.precip_in,
      };

      const forecastData: DailyForecast[] = data.forecast.forecastday.map((day: any) => ({
        date: day.date,
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        maxTempF: day.day.maxtemp_f,
        minTempF: day.day.mintemp_f,
        condition: day.day.condition.text,
      }));

      setWeather(weatherData);
      console.log("Weather:", weatherData);

      setForecast(forecastData);
      console.log("Forecast:", forecastData);

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
      <header className="px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">Weather Now</h1>
        <div className="flex border border-gray-300 rounded overflow-hidden">
          <button
            onClick={() => setUnits('metric')}
            className={`px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              units === 'metric' 
                ? 'bg-gray-800 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Metric
          </button>
          <button
            onClick={() => setUnits('imperial')}
            className={`px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              units === 'imperial' 
                ? 'bg-gray-800 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Imperial
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto">
        <section className="px-6 py-4 text-center font-bold text-3xl">How's the sky looking today?</section>

        <SearchBar onSearch={handleSearch} />
        
        {loading && (
          <div className="mx-6 my-4 text-center">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-gray-800 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-gray-800 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-3 h-3 bg-gray-800 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            </div>
            <p className="text-gray-600 text-sm">Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="mx-6 my-4 text-center bg-red-50 border border-red-200 p-4 rounded-lg">
            <p className="text-red-600 font-semibold">{error}</p>
          </div>
        )}

        {weather && <CurrentWeather {...weather} units={units} />}
      </main>
    </div>
  )
}

export default App

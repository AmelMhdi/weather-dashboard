import { useState } from "react"
import { SearchBar } from "./components/SearchBar"

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
      const API_KEY = "bf1cf1452777479381f103121250612";
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

  return (
    <>
      <div className='p-8 text-2xl bg-blue-500'>Weather Dashboard</div>

      <SearchBar onSearch={handleSearch} />
    </>
  )
}

export default App

import { getWeatherIcon } from "../utils";

interface WeatherProps {
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
    units: "metric" | "imperial";
}

export function CurrentWeather({
    temperature,
    temperatureF,
    description,
    city,
    feelsLike,
    feelsLikeF,
    humidity,
    windSpeed,
    windSpeedMph,
    precipitation,
    precipitationIn,
    units
}: WeatherProps) {
    return (
        <>
            {/* Main weather card */}
            <div className="mx-6 my-4 bg-white rounded-lg shadow-md p-8 text-center">
                <h1 className="mb-2 text-2xl font-bold text-gray-800">{city}</h1>
                <div className="flex items-center justify-center gap-4 my-4">
                    <img src={getWeatherIcon(description)} alt={description} className="w-20 h-20" />
                    <p className="text-6xl font-bold text-gray-900 my-4 transition-all duration-300">
                    {units === "metric" ? temperature : temperatureF}°
                    </p>
                </div>
                <p className="text-lg text-gray-600 font-semibold">{description}</p>
            </div>

            {/* Details grid */}
            <div className="mx-6 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-sm text-gray-500 mb-1 font-semibold">Feels Like</p>
                    <p className="text-2xl font-bold text-gray-900 transition-all duration-300">{units === "metric" ? feelsLike : feelsLikeF}°</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-sm text-gray-500 mb-1 font-semibold">Humidity</p>
                    <p className="text-2xl font-bold text-gray-900 transition-all duration-300">{humidity}%</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-sm text-gray-500 mb-1 font-semibold">Wind Speed</p>
                    <p className="text-2xl font-bold text-gray-900 transition-all duration-300">{units === "metric" ? windSpeed : windSpeedMph} {units === "metric" ? "kph" : "mph"}</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-sm text-gray-500 mb-1 font-semibold">Precipitation</p>
                    <p className="text-2xl font-bold text-gray-900 transition-all duration-300">{units === "metric" ? precipitation : precipitationIn} {units === "metric" ? "mm" : "in"}</p>
                </div>
            </div>
        </>
    )
}
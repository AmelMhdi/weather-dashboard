import sunnyIcon from "../../assets/icon-sunny.webp"
import stormIcon from "../../assets/icon-storm.webp"
import snowIcon from "../../assets/icon-snow.webp"
import rainIcon from "../../assets/icon-rain.webp"
import partlyCloudyIcon from "../../assets/icon-partly-cloudy.webp"
import overcastIcon from "../../assets/icon-overcast.webp"
import fogIcon from "../../assets/icon-fog.webp"
import drizzleIcon from "../../assets/icon-drizzle.webp"

interface WeatherProps {
    temperature: number;
    description: string;
    city: string;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    precipitation: number;
}

export function CurrentWeather({
    temperature,
    description,
    city,
    feelsLike,
    humidity,
    windSpeed,
    precipitation
}: WeatherProps) {
    const getWeatherIcon = (description: string) => {
        const condition = description.toLowerCase();
        if (condition.includes("sunny") || condition.includes("clear")) {
            return sunnyIcon;
        } else if (condition.includes("partly cloudy")) {
            return partlyCloudyIcon;
        } else if (condition.includes("storm")) {
            return stormIcon;
        } else if (condition.includes("snow")) {
            return snowIcon;
        } else if (condition.includes("rain")) {
            return rainIcon;
        } else if (condition.includes("overcast") || condition.includes("cloudy")) {
            return overcastIcon;
        } else if (condition.includes("fog") || condition.includes("mist")) {
            return fogIcon;
        } else if (condition.includes("drizzle")) {
            return drizzleIcon;
        }

        return partlyCloudyIcon
    }
    return (
        <>
            {/* Main weather card */}
            <div className="mx-6 my-4 bg-white rounded-lg shadow-md p-8 text-center">
                <h1 className="mb-2 text-2xl font-bold text-gray-800">{city}</h1>
                <div className="flex items-center justify-center gap-4 my-4">
                    <img src={getWeatherIcon(description)} alt={description} className="w-20 h-20" />
                    <p className="text-6xl font-bold text-gray-900 my-4">{temperature}°C</p>
                </div>
                <p className="text-lg text-gray-600 font-semibold">{description}</p>
            </div>

            {/* Details grid */}
            <div className="mx-6 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-sm text-gray-500 mb-1 font-semibold">Feels Like</p>
                    <p className="text-2xl font-bold text-gray-900">{feelsLike}°C</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-sm text-gray-500 mb-1 font-semibold">Humidity</p>
                    <p className="text-2xl font-bold text-gray-900">{humidity}%</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-sm text-gray-500 mb-1 font-semibold">Wind Speed</p>
                    <p className="text-2xl font-bold text-gray-900">{windSpeed} kph</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-sm text-gray-500 mb-1 font-semibold">Precipitation</p>
                    <p className="text-2xl font-bold text-gray-900">{precipitation} mm</p>
                </div>
            </div>
        </>
    )
}
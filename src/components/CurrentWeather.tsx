// current weather as props
// display all info nicely
// handle case when no data is available

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
    return (
        <>
            {/* Main weather card */}
            <div className="mx-6 my-4 bg-white rounded-lg shadow-md p-8 text-center">
                <h1 className="mb-2 text-2xl font-bold text-gray-800">{city}</h1>
                <p className="text-6xl font-bold text-gray-900 my-4">{temperature}°C</p>
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
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
        <div>
            <h2>Current Weather in {city}</h2>
            <p>{description}</p>
            <ul>
                <li>Temperature: {temperature}°C</li>
                <li>Feels Like: {feelsLike}°C</li>
                <li>Humidity: {humidity}%</li>
                <li>Wind Speed: {windSpeed} kph</li>
                <li>Precipitation: {precipitation} mm</li>
            </ul>
        </div>
    )
}
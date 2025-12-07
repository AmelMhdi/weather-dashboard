// create 7 cards with day name, high/low temps, weather icon
// call different api endpoint for forecast data

interface DailyForecastProps {
    forecast: Array <{
        date: string;
        maxTemp: number;
        minTemp: number;
        maxTempF: number;
        minTempF: number;
        condition: string;
    }>;
    units: "metric" | "imperial";
}

export function DailyForecast({ forecast, units }: DailyForecastProps) {
    const getDayName = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { weekday: "short" });
    }

    return (
        <div className="mx-6 my-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Daily Forecast</h2>
            {/* TODO: map through forecast and create cards */}

            <div className="flex gap-3 overflow-x-auto pb-2 justify-between">
                {forecast.map((day) => (
                    <div 
                        key={day.date} 
                        className="bg-white rounded-lg shadow-md p-4 shrink-0 w-26 text-center"
                    >
                        <div className="flex-col items-center gap-4">
                            {/* Day name */}
                            <p className="text-sm font-semibold text-gray-800 mb-3">{getDayName(day.date)}</p>

                            {/* Weather icon placeholder */}
                            <div className="w-12 h-12 bg-gray-200 rounded mx-auto mb-3">
                                {/* Placeholder for weather icon */}
                            </div>
                        </div>

                        {/* Temperatures */}
                        <div className="flex justify-between text-sm">
                            <span className="font-bold text-gray-900">
                                {units === "metric" ? Math.round(day.maxTemp) : Math.round(day.maxTempF)}°
                            </span>
                            <span className="font-semibold text-gray-500">
                                {units === "metric" ? Math.round(day.minTemp) : Math.round(day.minTempF)}°
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
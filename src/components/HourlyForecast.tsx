import { useState } from "react";
import { getWeatherIcon } from "../utils";

interface HourlyForecastProps {
    // define props for hourly forecast component
    forecast: Array<{
        date: string;
        hour: Array<{
            time: string;
            temp: number;
            tempF: number;
            condition: { text: string };
        }>;
    }>;
    units: "metric" | "imperial";
}

export function HourlyForecast({ forecast, units }: HourlyForecastProps) {
    const [selectedDay, setSelectedDay] = useState(0); // index of selected day

    const getDayName = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { weekday: "long" });
    };

    const getHourFromTime = (timeString: string) => {
        // "2025-12-12 12:00" to "12 PM"
        const date = new Date(timeString);
        return date.toLocaleTimeString("en-US", { hour: "numeric", hour12: true });
    };

    const selectedDayData = forecast[selectedDay];

    return (
        <div className="mx-6 my-8">
            {/* header with title and day selector */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Hourly Forecast</h2>
                <div className="relative">
                    <select
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(Number(e.target.value))}
                        className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm font-semibold text-gray-800 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                    >
                        {forecast.map((day, index) => (
                            <option key={day.date} value={index}>
                                {getDayName(day.date)}
                            </option>
                        ))}
                    </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                </div>

                </div>
            </div>

            {/* Hourly cards */}
            <div className="p-2 max-h-[655px] overflow-y-auto space-y-2">
                {selectedDayData.hour.map((hourData, index) => (
                    <div 
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
                    >
                        {/* Left side: Icon and time */}
                        <div className="flex items-center gap-4">
                            <img 
                            src={getWeatherIcon(hourData.condition.text)} 
                            alt={hourData.condition.text}
                            className="w-8 h-8"
                            />
                            <p className="text-sm font-semibold text-gray-800">
                            {getHourFromTime(hourData.time)}
                            </p>
                        </div>

                        {/* Right side: Temperature */}
                        <p className="text-lg font-bold text-gray-900">
                            {units === "metric" ? Math.round(hourData.temp) : Math.round(hourData.tempF)}°
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
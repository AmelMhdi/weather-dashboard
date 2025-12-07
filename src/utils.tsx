import sunnyIcon from "../assets/icon-sunny.webp"
import stormIcon from "../assets/icon-storm.webp"
import snowIcon from "../assets/icon-snow.webp"
import rainIcon from "../assets/icon-rain.webp"
import partlyCloudyIcon from "../assets/icon-partly-cloudy.webp"
import overcastIcon from "../assets/icon-overcast.webp"
import fogIcon from "../assets/icon-fog.webp"
import drizzleIcon from "../assets/icon-drizzle.webp"

export function getWeatherIcon(description: string): string {
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
    return partlyCloudyIcon;
}
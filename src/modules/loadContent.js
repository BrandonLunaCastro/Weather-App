import { getDailyForecast, getWeeklyForecast } from "./getData";
import loadForecast from "./loadForecast";

const showContent = async (location) => {
    location = !location ? "mendoza" : location;
    const weekly = await getWeeklyForecast(location);
    const daily = await getDailyForecast(location);
    const zone = document.querySelector(".location");
    const mainIcon = document.getElementById("main__icon");
    const feels = document.querySelector(".feels");
    const actualDegree = document.querySelector(".degree");
    const textPlain = document.querySelector(".weather__text");

    zone.innerText = `${daily.location.name}`;
    mainIcon.src = daily.currentWeather.condition.icon;
    actualDegree.innerText = `${daily.currentWeather.temp_c}°c`;
    feels.innerText = `${daily.currentWeather.feelslike_c}°c`;
    textPlain.innerText = daily.currentWeather.condition.text;

    document.querySelector(".region").innerText = daily.location.region;
    document.querySelector(".wind").innerText = `${daily.currentWeather.wind_kph} km/h`;
    document.querySelector(".gust").innerText = `${daily.currentWeather.gust_kph} km/h`;
    document.querySelector(".humidity").innerText = `${daily.currentWeather.humidity}%`;
    loadForecast(weekly);
    // console.log(daily);
};
export default function loadContent() {
    showContent();
    document.getElementById("search").addEventListener("change", (e) => {
        showContent(e.target.value);
    });
}

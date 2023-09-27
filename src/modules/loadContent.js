import changeBackground from "./background";
import { getDailyForecast, getWeeklyForecast } from "./getData";
import loadForecast from "./loadForecast";
import loadHour from "./loadPerHour";

const showContent = async (city) => {
    const location = !city ? "mendoza" : city;
    const weekly = await getWeeklyForecast(location);
    const daily = await getDailyForecast(location);
    const zone = document.querySelector(".location");
    const mainIcon = document.getElementById("main__icon");
    const feels = document.querySelector(".feels");
    const actualDegree = document.querySelector(".degree");
    const textPlain = document.querySelector(".weather__text");
    const degree = sessionStorage.getItem("temperature");
    const temperature = degree === "C"
        ? `${daily.currentWeather.temp_c}°c`
        : `${daily.currentWeather.temp_f}°F`;
    const feelsLike = degree === "C"
        ? `${daily.currentWeather.feelslike_c}°c`
        : `${daily.currentWeather.feelslike_f}°F`;

    zone.innerText = `${daily.location.name}`;
    mainIcon.src = daily.currentWeather.condition.icon;
    actualDegree.innerText = temperature;
    feels.innerText = feelsLike;
    textPlain.innerText = daily.currentWeather.condition.text;

    document.querySelector(".region").innerText = daily.location.region;
    document.querySelector(".wind").innerText = `${daily.currentWeather.wind_kph} km/h`;
    document.querySelector(".gust").innerText = `${daily.currentWeather.gust_kph} km/h`;
    document.querySelector(".humidity").innerText = `${daily.currentWeather.humidity}%`;
    document.querySelector(".box5").innerHTML = "";
    loadForecast(weekly);
    loadHour(daily.hour);
    changeBackground(daily.currentWeather.condition.text);
};

export default function loadContent() {
    const btnSwitch = document.querySelector(".btn");
    const buttons = document.querySelector(".button__temp");
    const search = document.getElementById("search");
    showContent();
    buttons.addEventListener("click", (e) => {
        if (e.target.matches("#fahrenheit")) {
            btnSwitch.style.left = "65px";
            sessionStorage.setItem("temperature", "F");
            showContent(search.value);
        }
        if (e.target.matches("#celsius")) {
            btnSwitch.style.left = "0px";
            sessionStorage.setItem("temperature", "C");
            showContent(search.value);
        }
    });
    search.addEventListener("change", (e) => {
        showContent(e.target.value);
    });
}

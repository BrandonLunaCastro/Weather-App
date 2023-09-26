import { getDailyForecast, getWeeklyForecast } from "./getData";

const showContent = async (location) => {
    const weekly = await getWeeklyForecast(location);
    const daily = await getDailyForecast(location);
    const zone = document.querySelector(".location");
    const mainIcon = document.getElementById("main__icon");
    const feels = document.querySelector(".feels");
    const actualDegree = document.querySelector(".degree");
    const textPlain = document.querySelector(".weather__text");

    zone.innerText = `${daily.location.name}`;
    document.querySelector(".region").innerText = daily.location.region;
    mainIcon.src = daily.currentWeather.condition.icon;
    actualDegree.innerText = `${daily.currentWeather.temp_c}°c`;
    feels.innerText = `Real feel ${daily.currentWeather.feelslike_c}°c`;
    textPlain.innerText = daily.currentWeather.condition.text;

    console.log(weekly);
    console.log(daily);
};
export default function loadContent() {
    showContent();
    document.getElementById("search").addEventListener("change", (e) => {
        showContent(e.target.value);
    });
}

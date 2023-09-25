import { getDailyForecast, getWeeklyForecast } from "./getData.js"

const showContent = async (daily, weekly) => {
    const main = document.querySelector("main")
    const locationTitle = document.querySelector(".location")
    const country = document.querySelector(".country")
    const tempCelcius = document.querySelector(".temp")
    const icon = document.getElementById("icon")
    const imageZone = document.getElementById("image__zone")
    const zone = document.querySelector(".zone")
    if (!daily && !weekly) {
        daily = await getDailyForecast()
        weekly = await getWeeklyForecast()
    }
    zone.innerText = `${daily.location.name}, ${daily.location.region} ${daily.currentWeather.temp_c}°c`
    imageZone.src = daily.currentWeather.condition.icon
    locationTitle.innerText = daily.location.name
    country.innerText = daily.location.country
    tempCelcius.innerText = `${daily.currentWeather.temp_c}°C`
    icon.src = daily.currentWeather.condition.icon
    console.log(daily)
    console.log(weekly)
}

const searchLocation = async (e) => {
    const location = e.target.value
    const dailyForecast = await getDailyForecast(location)
    const weeklyForecast = await getWeeklyForecast(location)
    showContent(dailyForecast, weeklyForecast)
}
export default function loadContent () {
    const search = document.getElementById("search")
    showContent()
    search.addEventListener("change", searchLocation)
}

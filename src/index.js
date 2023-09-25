import { getWeather } from "./modules/getData.js"

console.log("hi")

const initApp = () => {
    getWeather()
}

window.addEventListener("DOMContentLoaded", initApp)

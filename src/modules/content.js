import { getDailyForecast, getWeeklyForecast } from "./getData.js"

export default async function loadContent () {
    console.log(await getDailyForecast())
    console.log(await getWeeklyForecast())
}

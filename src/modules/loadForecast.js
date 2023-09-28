import { format } from "date-fns";

const showForecast = (article, data) => {
    const { date, day } = data;
    const element = article;
    const degree = !sessionStorage.getItem("temperature") ? "C" : sessionStorage.getItem("temperature");
    const max = degree === "C" ? day.maxtemp_c : day.maxtemp_f;
    const min = degree === "C" ? day.mintemp_c : day.mintemp_f;
    element.innerHTML = `
        <p>${format(new Date(`${date}T00:00:00`), "EEEE")}</p>
        <img src="${day.condition.icon}" alt="image" data-img>
        <p>${day.condition.text}</p>
        <p>${max}°. <span class="min__temp">${min}°</span>.</p>
    `;
};
export default function loadForecast(weekly) {
    const dataForecast = document.querySelectorAll("[data-forecast]");
    // console.log(weekly);
    dataForecast.forEach((article, i) => {
        showForecast(article, weekly[i]);
    });
}

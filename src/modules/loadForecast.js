import { format } from "date-fns";

const showForecast = (article, data) => {
    const { date, day } = data;
    const element = article;
    element.innerHTML = `
        <p>${format(new Date(`${date}T00:00:00`), "EEEE")}</p>
        <img src="${day.condition.icon}" alt="image" data-img>
        <p>${day.condition.text}</p>
        <p>${day.maxtemp_c}°. <span class="min__temp">${day.mintemp_c}°</span>.</p>
    `;
};
export default function loadForecast(weekly) {
    const dataForecast = document.querySelectorAll("[data-forecast]");
    // console.log(weekly);
    dataForecast.forEach((article, i) => {
        showForecast(article, weekly[i]);
    });
}

// day.innerText = format(new Date(weekly[i].date), "EEEE");

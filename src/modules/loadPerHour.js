import { format } from "date-fns";

const showForecastHour = (info) => {
    const {
        time, condition, temp_c, feelslike_c, temp_f, feelslike_f,
    } = info;
    const article = document.createElement("article");
    const fragment = document.createDocumentFragment();
    const degree = !sessionStorage.getItem("temperature") ? "C" : sessionStorage.getItem("temperature");
    const temp = degree === "C" ? `${temp_c}°c` : `${temp_f}°F`;
    const feels = degree === "C" ? `${feelslike_c}°c` : `${feelslike_f}°F`;
    article.classList.add("container__hour");
    article.innerHTML = `
        <p class="hour" >${format(new Date(time), "H:mm aaaa")}</p>
        <img src="${condition.icon}" class="img__hour">
        <p class="text_hour">${condition.text}</p>
        <p>${temp}</p>
        <p class="feels__hour">feels ${feels}</p>
    `;
    fragment.appendChild(article);
    document.querySelector(".box5").appendChild(fragment);
};

export default function loadHour(data) {
    data.forEach((info) => {
        showForecastHour(info);
    });
}

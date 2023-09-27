import { format } from "date-fns";

const isGraterThan = (dateRelative) => {
    const actualDate = format(new Date(), "H");
    const relativeDate = format(new Date(dateRelative), "H");
    if (Number(relativeDate) > Number(actualDate)) {
        return true;
    }
};

const showForecastHour = (info) => {
    const {
        time, condition, temp_c, feelslike_c,
    } = info;
    const article = document.createElement("article");
    const fragment = document.createDocumentFragment();
    const box5 = document.querySelector(".box5");
    const temp = temp_c;
    const feels = feelslike_c;
    article.classList.add("container__hour");
    article.innerHTML = `
        <p class="hour" >${format(new Date(time), "H:mm")}</p>
        <img src="${condition.icon}" class="img__hour">
        <p>${condition.text}</p>
        <p>${temp}°</p>
        <p class="feels__hour">feels ${feels}°</p>
    `;
    fragment.appendChild(article);
    box5.appendChild(fragment);
};

export default function loadHour(data) {
    data.forEach((info) => {
        if (isGraterThan(info.time)) {
            showForecastHour(info);
        }
    });
}

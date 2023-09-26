import { format } from "date-fns";

const showForecastHour = (info) => {
    console.log(info);
    const { time, condition } = info;
    const article = document.createElement("article");
    const fragment = document.createDocumentFragment();
    const box5 = document.querySelector(".box5");
    article.classList.add("container__hour")
    article.innerHTML = `
        <p>${format(new Date(time), "p")}</p>
        <img src="${condition.icon}" class="img__hour">
        <p></p>
        <p></p>
        <p></p>
    `;
    fragment.appendChild(article);
    box5.appendChild(fragment);
};
export default function loadHour(data) {
    data.forEach((info) => {
        showForecastHour(info);
    });
}

import loadContent from "./modules/loadContent";
import switchTemperature from "./modules/switchTemperature";
import "./styles/style.css";

const initApp = () => {
    loadContent();
    switchTemperature();
};

window.addEventListener("DOMContentLoaded", initApp);

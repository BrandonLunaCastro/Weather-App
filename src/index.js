import loadContent from "./modules/loadContent";
import "./styles/style.css";

const initApp = () => {
    loadContent();
};

window.addEventListener("DOMContentLoaded", initApp);

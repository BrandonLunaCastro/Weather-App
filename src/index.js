import loadContent from "./modules/content"
import "./styles/style.css"

const initApp = () => {
    loadContent()
}

window.addEventListener("DOMContentLoaded", initApp)

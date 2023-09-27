export default function switchTemperature() {
    const btnSwitch = document.querySelector(".btn");
    const buttons = document.querySelector(".button__temp");
    buttons.addEventListener("click", (e) => {
        if (e.target.matches("#fahrenheit")) {
            btnSwitch.style.left = "65px";
            sessionStorage.setItem("temperature", "F");
        }
        if (e.target.matches("#celsius")) {
            btnSwitch.style.left = "0px";
            sessionStorage.setItem("temperature", "C");
        }
    });
}

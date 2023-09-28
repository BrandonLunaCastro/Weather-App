function randomNumber() {
    return Math.round(Math.random() * (15 - 0) + 0);
}

export default function changeBackground(data) {
    const imageNum = randomNumber();
    const background = document.querySelector("html");
    const request = fetch(`https://api.pexels.com/v1/search?query=${data}`, {
        headers: { Authorization: "8rdzCB2djNs8QYBtzTTEhhf2WtfnxhpF37ND4S6TS0hgJSHR7T3aszYs" },
        mode: "cors",
    });
    request.then((res) => res.json())
        .then((json) => {
            background.style.backgroundImage = `url(${json.photos[imageNum].src.original})`;
            document.querySelector(".photographer").innerText = `Photo by ${json.photos[imageNum].photographer}`;
        })
        .catch(() => {
            background.style.backgroundImage = "url(https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
            document.querySelector(".photographer").innerText = "Photo by Pixabay";
        });
}

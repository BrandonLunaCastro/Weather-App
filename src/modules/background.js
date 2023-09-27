export default function changeBackground(data) {
    const request = fetch(`https://api.giphy.com/v1/gifs/translate?api_key=KTFltm3ISnIkpTY4ANfoLWU31YCWkAeN&s=${data}`, { mode: "cors" });
    request.then((res) => res.json())
        .then((json) => {
            const background = document.querySelector("html");
            background.style.backgroundImage = `url(${json.data.images.original.url})`;
        });
}

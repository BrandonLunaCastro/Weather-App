import format from "date-fns/format";

export default function clock(reference) {
    const time = format(new Date(), "H:mm:ss");
    document.querySelector(reference).innerText = time;
    setTimeout(() => clock(reference), 1000);
}

let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let errorMsgEl = document.getElementById("errorMsg");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let convertBtnEl = document.getElementById("convertBtn");

let hours;
let minutes;
let seconds;

function display() {
    if (hoursInputEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours";
        timeInSecondsEl.textContent = "";
        timeInSecondsEl.classList.remove("results");
    } else if (minutesInputEl.value === "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes";
        timeInSecondsEl.textContent = "";
        timeInSecondsEl.classList.remove("results");
    } else if (hoursInputEl.value && minutesInputEl.value) {
        errorMsgEl.textContent = "";
        hours = hoursInputEl.value * 3600;
        minutes = minutesInputEl.value * 60;
        seconds = hours + minutes;
        timeInSecondsEl.textContent = seconds + "s";
        timeInSecondsEl.classList.add("results");
    }
}

convertBtnEl.addEventListener("click", display);
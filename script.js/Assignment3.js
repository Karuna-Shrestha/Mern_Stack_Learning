let hour = 0;
let minute = 0;
let second = 0;
let interval = null;

const hourSpan = document.getElementById("hour");
const minuteSpan = document.getElementById("minute");
const secondSpan = document.getElementById("second");

function updateDisplay() {
    hourSpan.textContent = String(hour).padStart(2, "0");
    minuteSpan.textContent = String(minute).padStart(2, "0");
    secondSpan.textContent = String(second).padStart(2, "0");
}

function runTimer() {
    second++;

    if (second === 60) {
        second = 0;
        minute++;
    }

    if (minute === 60) {
        minute = 0;
        hour++;
    }

    updateDisplay();
}

document.getElementById("start").addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(runTimer, 1000);
    }
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

document.getElementById("end").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;

    hour = 0;
    minute = 0;
    second = 0;

    updateDisplay();
});
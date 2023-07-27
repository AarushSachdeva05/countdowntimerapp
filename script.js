let interval;
let userTime = 0;

function startTimer() {
    let timerDisplay = document.getElementById("timer");
    let countdownTimeInput = document.getElementById("countdownTime");
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    let resetBtn = document.getElementById("resetBtn");

    if (interval) {
        clearInterval(interval);
    }

    userTime = parseInt(countdownTimeInput.value, 10);

    if (isNaN(userTime) || userTime <= 0) {
        alert("Please enter a valid positive number for countdown time.");
        return;
    }

    let timer = userTime;
    let minutes, seconds;

    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            timerDisplay.textContent = "Time's up!";
            stopBtn.disabled = true;
        }
    }, 1000);

    countdownTimeInput.value = "";
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}

function stopTimer() {
    clearInterval(interval);
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    let resetBtn = document.getElementById("resetBtn");

    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
}

function resetTimer() {
    clearInterval(interval);
    let timerDisplay = document.getElementById("timer");
    let countdownTimeInput = document.getElementById("countdownTime");
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    let resetBtn = document.getElementById("resetBtn");

    timerDisplay.textContent = "00:00";
    countdownTimeInput.value = "";
    userTime = 0;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

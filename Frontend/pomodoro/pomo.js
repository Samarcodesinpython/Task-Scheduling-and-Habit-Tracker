let timer;
let isRunning = false;
let timeLeft = 25 * 60; // 25 minutes default

const startPauseBtn = document.getElementById("start-pause");
const resetBtn = document.getElementById("reset");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const modeButtons = document.querySelectorAll(".mode");

// Function to update timer display
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    minutesDisplay.textContent = minutes.toString().padStart(2, "0");
    secondsDisplay.textContent = seconds.toString().padStart(2, "0");
}

// Function to start/pause the timer
function startPauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        startPauseBtn.textContent = "Start";
    } else {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alert("Time's up!");
            }
        }, 1000);
        startPauseBtn.textContent = "Pause";
    }
    isRunning = !isRunning;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60; // Reset to 25 minutes
    updateDisplay();
    isRunning = false;
    startPauseBtn.textContent = "Start";
}

// Function to change modes
modeButtons.forEach(button => {
    button.addEventListener("click", function () {
        modeButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        if (this.dataset.mode === "pomodoro") {
            timeLeft = 25 * 60;
        } else if (this.dataset.mode === "short-break") {
            timeLeft = 5 * 60;
        } else if (this.dataset.mode === "long-break") {
            timeLeft = 15 * 60;
        }

        updateDisplay();
        resetTimer();
    });
});

// Event Listeners
startPauseBtn.addEventListener("click", startPauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Initial Display Update
updateDisplay();

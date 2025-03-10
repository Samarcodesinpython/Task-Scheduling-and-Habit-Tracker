let timeLeft = 1500;
        let timer;
        let isRunning = false;
        const display = document.querySelector(".timer-display");
        const circle = document.querySelector(".progress-ring-circle");
        const startBtn = document.getElementById("start");
        const pauseBtn = document.getElementById("pause");
        const resetBtn = document.getElementById("reset");

        function updateDisplay() {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            display.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
            let progress = (timeLeft / 1500) * 565.48;
            circle.style.strokeDashoffset = progress;
        }

        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                timer = setInterval(() => {
                    if (timeLeft > 0) {
                        timeLeft--;
                        updateDisplay();
                    } else {
                        clearInterval(timer);
                        isRunning = false;
                    }
                }, 1000);
            }
        }

        function pauseTimer() {
            clearInterval(timer);
            isRunning = false;
        }

        function resetTimer() {
            clearInterval(timer);
            isRunning = false;
            timeLeft = 1500;
            updateDisplay();
        }

        startBtn.addEventListener("click", startTimer);
        pauseBtn.addEventListener("click", pauseTimer);
        resetBtn.addEventListener("click", resetTimer);
        updateDisplay();
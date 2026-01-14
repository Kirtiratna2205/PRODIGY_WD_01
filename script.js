let timer = null;
let milliseconds = 0;
let running = false;
let lapCount = 0;

function formatTime(ms) {
  let hrs = Math.floor(ms / 3600000);
  let mins = Math.floor((ms % 3600000) / 60000);
  let secs = Math.floor((ms % 60000) / 1000);
  let millis = Math.floor((ms % 1000) / 10);

  return (
    String(hrs).padStart(2, "0") + ":" +
    String(mins).padStart(2, "0") + ":" +
    String(secs).padStart(2, "0") + ":" +
    String(millis).padStart(2, "0")
  );
}

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      milliseconds += 10;
      document.getElementById("display").innerText = formatTime(milliseconds);
    }, 10);
  }
}

function pauseTimer() {
  running = false;
  clearInterval(timer);
}

function resetTimer() {
  running = false;
  clearInterval(timer);
  milliseconds = 0;
  lapCount = 0;
  document.getElementById("display").innerText = "00:00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lapTime() {
  if (running) {
    lapCount++;

    const lap = document.createElement("li");
    lap.innerText = lapCount + ". " + formatTime(milliseconds);

    document.getElementById("laps").appendChild(lap);
  }
}
let homeScore = 0;
let awayScore = 0;
let homeFouls = 0;
let awayFouls = 0;
let quarter = 1;

let timerMinutes = 12;
let timerSeconds = 0;
let timerInterval = null;
let isRunning = false;

function updateScores() {
  document.getElementById("home-score").innerText = homeScore;
  document.getElementById("away-score").innerText = awayScore;
}

function updateFouls() {
  document.getElementById("home-fouls").innerText = homeFouls;
  document.getElementById("away-fouls").innerText = awayFouls;
}

function addPoints(team, points) {
  if (team === "home") {
    homeScore += points;
  } else {
    awayScore += points;
  }
  updateScores();
}

function addFoul(team) {
  if (team === "home") {
    homeFouls++;
  } else {
    awayFouls++;
  }
  updateFouls();
}

function updateTimerDisplay() {
  let min = timerMinutes.toString().padStart(2, "0");
  let sec = timerSeconds.toString().padStart(2, "0");
  document.getElementById("timer").innerText = `${min}:${sec}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timerInterval = setInterval(() => {
    if (timerSeconds === 0) {
      if (timerMinutes === 0) {
        clearInterval(timerInterval);
        isRunning = false;
        return;
      } else {
        timerMinutes--;
        timerSeconds = 59;
      }
    } else {
      timerSeconds--;
    }
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  timerMinutes = 12;
  timerSeconds = 0;
  updateTimerDisplay();
}

function nextQuarter() {
  if (quarter < 4) {
    quarter++;
  } else {
    quarter = 1;
  }
  document.getElementById("quarter").innerText = quarter;
  resetTimer();
}

// Initialize display
updateScores();
updateFouls();
updateTimerDisplay();
document.getElementById("quarter").innerText = quarter;

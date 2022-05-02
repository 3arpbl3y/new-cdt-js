const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYear = prompt();
// const newYear = "1 Jan 2023";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totalSec = (newYearDate - currentDate) / 1000;
  const mins = Math.floor((totalSec / 60) % 24) % 60;
  const hours = Math.floor(totalSec / 3600) % 24;
  const days = Math.floor(totalSec / 3600 / 24);
  const seconds = Math.floor(totalSec) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);

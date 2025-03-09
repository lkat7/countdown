const messages = [
  "i love you so much",
  "omg you're so pretty wth",
  "halfway through!! you got thiss",
  "i hope my fasting is valid.. im thinking about u way too much",
  "mommy? sorry.. ramadaaann ",
  "correct ur posture, desto shrimp type shit",
  "i miss u more than the amount of atoms in the universe",
  "stay hydrated i love you",
  "typeshititude",
  "sit on me mommy",
];

function updateCountdown(targetDate, daysId, hoursId, minutesId, secondsId) {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(daysId).innerHTML = days;
  document.getElementById(hoursId).innerHTML = hours;
  document.getElementById(minutesId).innerHTML = minutes;
  document.getElementById(secondsId).innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".container").innerHTML = "<h1>HAPPY BIRTHDAYY!!!!</h1>";
  }
}

function updateMessage() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
  const messageIndex = dayOfYear % messages.length;
  document.getElementById("message").innerHTML = messages[messageIndex];
}

// Target Dates
const targetDate1 = new Date("April 3, 2025 00:00:00").getTime();
const targetDate2 = new Date("March 10, 2025 00:00:00").getTime();

// Update both countdowns every second
const countdownInterval = setInterval(() => {
  updateCountdown(targetDate1, "days", "hours", "minutes", "seconds");
  updateCountdown(targetDate2, "days2", "hours2", "minutes2", "seconds2");
}, 1000);

// Initial Update
updateCountdown(targetDate1, "days", "hours", "minutes", "seconds");
updateCountdown(targetDate2, "days2", "hours2", "minutes2", "seconds2");
updateMessage();

// Background music settings
const backgroundMusic = document.getElementById("background-music");
backgroundMusic.volume = 0.15;


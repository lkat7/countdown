const messages = [
  "i love you so much",
  "omg you're so pretty wth",
  "you'll eat those exams uppp (and i'll eat you up)",
  "you gotta lemme take more pics of u",
  "no way you're still coming back to check this?? mwah ily",
  "i need you so much",
  "fuck i miss you",
  "stay hydrated i love you"
];

function updateCountdown() {
  const targetDate = new Date("April 3, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".container").innerHTML = "<h1>ilysmm</h1>";
  }
}

function updateMessage() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const messageIndex = dayOfYear % messages.length;
  document.getElementById("message").innerHTML = messages[messageIndex];
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateMessage();

const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.volume = 0.15; 
const time = document.querySelector('.time');
const dateToday = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  getTimeOfDay();
  setTimeout(showTime, 1000);
}
showTime();

function showDate() {
  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
  const currentDate = date.toLocaleDateString('en-RU', options);
  dateToday.textContent = currentDate;
  setTimeout(showDate, 1000);
}
showDate();


function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 0 && hours < 6) {
    return 'night';
  }
  if (hours >= 6 && hours < 12) {
    return 'morning';
  }
  if (hours >= 12 && hours < 18) {
    return 'afternoon';
  }
  if (hours >= 18 && hours < 24) {
    return 'evening';
  }
}
const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}!`;
greeting.textContent = greetingText;

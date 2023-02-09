const time = document.querySelector('.time');
const dateToday = document.querySelector('.date');

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
 time.textContent = currentTime;
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


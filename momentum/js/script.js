const time = document.querySelector('.time');
const dateToday = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const inputUserName = document.querySelector('.name');
const body = document.querySelector('.body');
let randomNumber;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

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

//GREETING START
//get time of day
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

//print greeting
function printGreeting() {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay},`;
  greeting.textContent = greetingText;
  setTimeout(printGreeting, 1000);
}
printGreeting()

//save the user name
function setLocalStorage() {
  localStorage.setItem('name', inputUserName.value);
}
window.addEventListener('beforeunload', setLocalStorage);

//get the user name
function getLocalStorage() {
  if (localStorage.getItem('name')) {
    inputUserName.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);
//GREETING END

//BACKGROUND SLIDER START
//add background
function getRandomNumber() {
  const min = Math.ceil(1);
  const max = Math.floor(20);
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  randomNumber = number.toString().padStart(2, '0');
}
getRandomNumber()

function setBackground() {
  const timeOfDay = getTimeOfDay();
  const bgNumber = randomNumber;
  const bgLink = `https://raw.githubusercontent.com/elenakilljoy/stage1-tasks/assets/images/${timeOfDay}/${bgNumber}.jpg`;
  body.style.backgroundImage = `url(${bgLink})`;
}
setBackground()

//slider ahead
function getSlideNext() {
  let toNumber = randomNumber * 1;
  if (toNumber < 20) {
    toNumber = toNumber + 1;
  } else if (toNumber === 20) {
    toNumber = 1;
  }
  randomNumber = toNumber.toString().padStart(2, '0');
setBackground()
}

//slider back
function getSlidePrev() {
  let toNumber = randomNumber * 1;
  if (toNumber > 1) {
    toNumber = toNumber - 1;
  } else if (toNumber === 1) {
    toNumber = 20;
  }
  randomNumber = toNumber.toString().padStart(2, '0');
setBackground()
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
//BACKGROUND SLIDER END
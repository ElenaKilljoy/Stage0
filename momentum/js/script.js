const time = document.querySelector('.time');
const dateToday = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const inputUserName = document.querySelector('.name');
const body = document.querySelector('.body');
let randomNumber;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const inputCity = document.querySelector('.city');
const error = document.querySelector('.weather-error');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
let randomQuote;
const newQuote = document.querySelector('.change-quote');
const listOfSongs = document.querySelector('.play-list');
const playButton = document.querySelector('.play');
const nextButton = document.querySelector('.play-next');
const prevButton = document.querySelector('.play-prev');

//CLOCK & DATE START
//add current time
function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
}
showTime();

//add current date
function showDate() {
  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = date.toLocaleDateString('en-RU', options);
  dateToday.textContent = currentDate;
  setTimeout(showDate, 1000);
}
showDate();
//CLOCK & DATE END

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
  const image = new Image();
  image.src = bgLink;
  image.onload = () => {
    body.style.backgroundImage = `url(${bgLink})`;
  }
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

//WEATHER START
//save the city
function setCity() {
  localStorage.setItem('city', inputCity.value);
}
window.addEventListener('beforeunload', setCity);

//get the city
function getCity() {
  if (localStorage.getItem('city')) {
    inputCity.value = localStorage.getItem('city');
  }
}
window.addEventListener('load', getCity);

if (localStorage.getItem('city')) {
  inputCity.value = localStorage.getItem('city');
} else {
  inputCity.value = inputCity.value;
}

//get weather of the city
async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=en&appid=fd5748f19f1d5d00659db9433c42970a&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.className = 'weather-icon owf';
  if (data.cod === 200) {
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}\u00B0C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}\%`;
    error.textContent = '';
  } else {
    if (inputCity.value.length === 0) {
      error.textContent = 'Error! Enter city!';
      weatherDescription.textContent = '';
      wind.textContent = '';
      temperature.textContent = '';
      humidity.textContent = '';
    } else {
      error.textContent = `Error! '${inputCity.value}' not found!`;
      weatherDescription.textContent = '';
      wind.textContent = '';
      temperature.textContent = '';
      humidity.textContent = '';
    }
  }
}
getWeather();
inputCity.addEventListener('change', getWeather);
//WEATHER END

//QUOTE START
//get a random quote
function getNumberOfQuote() {
  const min = Math.ceil(0);
  const max = Math.floor(29);
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  randomQuote = number;
}
getNumberOfQuote();
async function getQuote() {  
  const quotes = 'js/quotes.json';
  const res = await fetch(quotes);
  const data = await res.json();
  console.log(data);
  let i = randomQuote;
  quote.textContent = data[i].text;
  author.textContent = data[i].author;
}
getQuote();

//change the quote
function changeQuote() {
  getNumberOfQuote();
  getQuote();
}
newQuote.addEventListener('click', changeQuote);
//QUOTE END

//AUDIO START
//set the playlist
for(let i = 0; i < playList.length; i++) {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = playList[i].title;
  listOfSongs.append(li);
}
const listItem = document.querySelectorAll('.play-item');

//function for playing audio
const audio = new Audio();
let x = 0;
function playAudio() {
  audio.src = playList[x].src;
  audio.currentTime = 0;
  audio.volume = 0.2;
  audio.play();
}

//function to pause audio
function pauseAudio() {
  audio.pause();
}

//functionality for the play-button
function toggleButton() {
  if (playButton.classList.contains('pause') === false) {
    listItem[x].classList.add('item-active');
    playButton.classList.toggle('pause');
    playAudio();
  } else if (playButton.classList.contains('pause')) {
    playButton.classList.toggle('pause');
    pauseAudio();
  }
}
playButton.addEventListener('click', toggleButton);

//functionality for the play-next-button
function playNext() {
  listItem[x].classList.remove('item-active');
  x++;
  if (x === listItem.length) {
    x = 0;
  }
  listItem[x].classList.add('item-active');
  playAudio();
  if (playButton.classList.contains('pause') === false) {
    playButton.classList.toggle('pause');
  }
}
nextButton.addEventListener('click', playNext);
audio.addEventListener('ended', playNext);

//functionality for the play-previous-button
function playPrev() {
  listItem[x].classList.remove('item-active');
  x--;
  if (x < 0) {
    x = listItem.length - 1;
  }
  listItem[x].classList.add('item-active');
  playAudio(x);
  if (playButton.classList.contains('pause') === false) {
    playButton.classList.toggle('pause');
  }
}
prevButton.addEventListener('click', playPrev);
//AUDIO END
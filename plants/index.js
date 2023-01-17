console.log('Моя оценка - 85 баллов\n Отзыв по пунктам:\n Выполненные пункты:\n 1) вёрстка соответствует макету на ширине экрана 768px (+24)\n 2) вёрстка соответствует макету на ширине экрана 380px (+24)\n 3) нет полосы прокрутки при ширине страницы от 1440рх до 380px (+7)\n 4) нет полосы прокрутки при ширине страницы от 380px до 320рх (+8)\n 5) при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка (+2)\n 6) при нажатии на бургер-иконку плавно появляется адаптивное меню (+4)\n 7) адаптивное меню соответствует цветовой схеме макета (+4)\n 8) при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран (+4)\n 9) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям (+4)\n 10) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна (+4)')

const burgerIcon = document.querySelector('.burger');
const burgerCloseIcon = document.querySelector('.burger_close');
const menuList = document.querySelector('.menu_list');
const menuItems = document.querySelectorAll('.menu_item');
const mainBody = document.querySelector('.main');
const pageLogo = document.querySelector('.logo');


burgerIcon.addEventListener("click", (open) => {
  if (burgerIcon.classList.contains('burger')) {
    burgerIcon.classList.remove('burger');
    burgerIcon.classList.add('open');
    burgerCloseIcon.classList.remove('burger_close');
    burgerCloseIcon.classList.add('show');
    menuList.classList.add('menu_show');
  } 
})

burgerCloseIcon.addEventListener("click", (close) => {
  if (burgerCloseIcon.classList.contains('show')) {
    burgerCloseIcon.classList.remove('show');
    burgerCloseIcon.classList.add('burger_close');
    burgerIcon.classList.remove('open');
    burgerIcon.classList.add('burger');
    menuList.classList.remove('menu_show');
  }
})

let counter = 0;
while (counter < menuItems.length) {
  menuItems[counter].addEventListener("click", (close) => {
    if (burgerCloseIcon.classList.contains('show'))  {
      burgerCloseIcon.classList.remove('show');
      burgerCloseIcon.classList.add('burger_close');
      burgerIcon.classList.remove('open');
      burgerIcon.classList.add('burger');
      menuList.classList.remove('menu_show');
    }
  })
  counter = counter + 1;
}

mainBody.addEventListener("click", (close) => {
  if (burgerCloseIcon.classList.contains('show'))  {
    burgerCloseIcon.classList.remove('show');
    burgerCloseIcon.classList.add('burger_close');
    burgerIcon.classList.remove('open');
    burgerIcon.classList.add('burger');
    menuList.classList.remove('menu_show');
  }
})

pageLogo.addEventListener("click", (close) => {
  if (burgerCloseIcon.classList.contains('show'))  {
    burgerCloseIcon.classList.remove('show');
    burgerCloseIcon.classList.add('burger_close');
    burgerIcon.classList.remove('open');
    burgerIcon.classList.add('burger');
    menuList.classList.remove('menu_show');
  }
})
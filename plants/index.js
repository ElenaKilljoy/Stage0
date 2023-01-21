console.log('Моя оценка - 85 баллов\n Отзыв по пунктам:\n Выполненные пункты:\n 1) вёрстка соответствует макету на ширине экрана 768px (+24)\n 2) вёрстка соответствует макету на ширине экрана 380px (+24)\n 3) нет полосы прокрутки при ширине страницы от 1440рх до 380px (+7)\n 4) нет полосы прокрутки при ширине страницы от 380px до 320рх (+8)\n 5) при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка (+2)\n 6) при нажатии на бургер-иконку плавно появляется адаптивное меню (+4)\n 7) адаптивное меню соответствует цветовой схеме макета (+4)\n 8) при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран (+4)\n 9) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям (+4)\n 10) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна (+4)')


//BURGER START
const burgerIcon = document.querySelector('.burger');
const burgerCloseIcon = document.querySelector('.burger_close');
const menuList = document.querySelector('.menu_list');
const menuItems = document.querySelectorAll('.menu_item');
const mainBody = document.querySelector('.main');
const pageLogo = document.querySelector('.logo');

//open burger-menu 
burgerIcon.addEventListener('click', (open) => {
  if (burgerIcon.classList.contains('burger')) {
    burgerIcon.classList.remove('burger');
    burgerIcon.classList.add('open');
    burgerCloseIcon.classList.remove('burger_close');
    burgerCloseIcon.classList.add('show');
    menuList.classList.add('menu_show');
  } 
})

//close burger-menu with click on the cross-icon
burgerCloseIcon.addEventListener('click', (close) => {
  if (burgerCloseIcon.classList.contains('show')) {
    burgerCloseIcon.classList.remove('show');
    burgerCloseIcon.classList.add('burger_close');
    burgerIcon.classList.remove('open');
    burgerIcon.classList.add('burger');
    menuList.classList.remove('menu_show');
  }
})

//close burger-menu with click on the menu-item
let counter = 0;
while (counter < menuItems.length) {
  menuItems[counter].addEventListener('click', (close) => {
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

//close burger-menu with click on the page
mainBody.addEventListener('click', (close) => {
  if (burgerCloseIcon.classList.contains('show'))  {
    burgerCloseIcon.classList.remove('show');
    burgerCloseIcon.classList.add('burger_close');
    burgerIcon.classList.remove('open');
    burgerIcon.classList.add('burger');
    menuList.classList.remove('menu_show');
  }
})
pageLogo.addEventListener('click', (close) => {
  if (burgerCloseIcon.classList.contains('show'))  {
    burgerCloseIcon.classList.remove('show');
    burgerCloseIcon.classList.add('burger_close');
    burgerIcon.classList.remove('open');
    burgerIcon.classList.add('burger');
    menuList.classList.remove('menu_show');
  }
})
//BURGER END

//SERVICE START
const buttonGarden = document.querySelector('.button_garden');
const buttonLawn = document.querySelector('.button_lawn');
const buttonPlanting = document.querySelector('.button_planting');
const serviceItems = document.querySelectorAll('.service_item');

//select and unselect the button "Garden"
let i = 0;
const selectGarden = (select) => {
  if (buttonPlanting.classList.contains('active') && buttonGarden.classList.contains('active') === false) {
    buttonLawn.setAttribute('disabled', true);
    buttonGarden.classList.toggle('active');
  } else if (buttonLawn.classList.contains('active') && buttonGarden.classList.contains('active') === false) {
    buttonPlanting.setAttribute('disabled', true);
    buttonGarden.classList.toggle('active');
  } else if (buttonGarden.classList.contains('active') && buttonPlanting.disabled === true) {
    buttonPlanting.removeAttribute('disabled');
    buttonGarden.classList.toggle('active');
  } else if (buttonGarden.classList.contains('active') && buttonLawn.disabled === true) {
    buttonLawn.removeAttribute('disabled');
    buttonGarden.classList.toggle('active');
  } else if (buttonPlanting.classList.contains('active') === false && buttonGarden.disabled === false) {
    buttonGarden.classList.toggle('active');
  } else if (buttonLawn.classList.contains('active') === false && buttonGarden.disabled === false) {
    buttonGarden.classList.toggle('active');
  }
//add blur-effect for the unselected buttons ("Garden" selected)  
  while (i < serviceItems.length) {
    if (buttonGarden.classList.contains('active')) {
      if (serviceItems[i].classList.contains('lawn') && serviceItems[i].classList.contains('blur') === false && buttonLawn.classList.contains('active') === false) {
        serviceItems[i].classList.add('blur');
      } else if (serviceItems[i].classList.contains('planting') && serviceItems[i].classList.contains('blur') === false && buttonPlanting.classList.contains('active') === false) {
        serviceItems[i].classList.add('blur');
      } else if (serviceItems[i].classList.contains('gardens') && serviceItems[i].classList.contains('blur')) {
        serviceItems[i].classList.remove('blur');
      }
    } else if (buttonGarden.classList.contains('active') === false) {
      if (serviceItems[i].classList.contains('lawn') && serviceItems[i].classList.contains('blur') && buttonPlanting.classList.contains('active') === false) {
        serviceItems[i].classList.remove('blur');
      } else if (serviceItems[i].classList.contains('planting') && serviceItems[i].classList.contains('blur') && buttonLawn.classList.contains('active') === false) {
        serviceItems[i].classList.remove('blur');
      } else if (serviceItems[i].classList.contains('gardens') && serviceItems[i].classList.contains('blur') === false && buttonLawn.classList.contains('active')) {
        serviceItems[i].classList.add('blur');
      } else if (serviceItems[i].classList.contains('gardens') && serviceItems[i].classList.contains('blur') === false && buttonPlanting.classList.contains('active')) {
        serviceItems[i].classList.add('blur');
      }
    }
    i = i + 1;
  }
  i = 0;
}

//select and unselect the button "Lawn"
let x = 0;
const selectLawn = (select) => {
  if (buttonPlanting.classList.contains('active') && buttonLawn.classList.contains('active') === false) {
    buttonGarden.setAttribute('disabled', true);
    buttonLawn.classList.toggle('active');
  } else if (buttonGarden.classList.contains('active') && buttonLawn.classList.contains('active') === false) {
    buttonPlanting.setAttribute('disabled', true);
    buttonLawn.classList.toggle('active');
  } else if (buttonLawn.classList.contains('active') && buttonGarden.disabled === true) {
    buttonGarden.removeAttribute('disabled');
    buttonLawn.classList.toggle('active');
  } else if (buttonLawn.classList.contains('active') && buttonPlanting.disabled === true) {
    buttonPlanting.removeAttribute('disabled');
    buttonLawn.classList.toggle('active');
  } else if (buttonPlanting.classList.contains('active') === false && buttonLawn.disabled === false) {
    buttonLawn.classList.toggle('active');
  } else if (buttonGarden.classList.contains('active') === false && buttonLawn.disabled === false) {
    buttonLawn.classList.toggle('active');
  }
//add blur-effect for the unselected buttons ("Lawn" selected)  
  while (x < serviceItems.length) {
    if (buttonLawn.classList.contains('active')) {
      if (serviceItems[x].classList.contains('gardens') && serviceItems[x].classList.contains('blur') === false && buttonGarden.classList.contains('active') === false) {
        serviceItems[x].classList.add('blur');
      } else if (serviceItems[x].classList.contains('planting') && serviceItems[x].classList.contains('blur') === false && buttonPlanting.classList.contains('active') === false) {
        serviceItems[x].classList.add('blur');
      } else if (serviceItems[x].classList.contains('lawn') && serviceItems[x].classList.contains('blur')) {
        serviceItems[x].classList.remove('blur');
      }
    } else if (buttonLawn.classList.contains('active') === false) {
      if (serviceItems[x].classList.contains('gardens') && serviceItems[x].classList.contains('blur') && buttonPlanting.classList.contains('active') === false) {
        serviceItems[x].classList.remove('blur');
      } else if (serviceItems[x].classList.contains('planting') && serviceItems[x].classList.contains('blur') && buttonGarden.classList.contains('active') === false) {
        serviceItems[x].classList.remove('blur');
      } else if (serviceItems[x].classList.contains('lawn') && serviceItems[x].classList.contains('blur') === false && buttonPlanting.classList.contains('active')) {
        serviceItems[x].classList.add('blur');
      } else if (serviceItems[x].classList.contains('lawn') && serviceItems[x].classList.contains('blur') === false && buttonGarden.classList.contains('active')) {
        serviceItems[x].classList.add('blur');
      }
    }
    x = x + 1;
  }
  x = 0;
}

//select and unselect the button "Planting"
let y = 0;
const selectPlanting = (select) => {
  if (buttonLawn.classList.contains('active') && buttonPlanting.classList.contains('active') === false) {
    buttonGarden.setAttribute('disabled', true);
    buttonPlanting.classList.toggle('active');
  } else if (buttonGarden.classList.contains('active') && buttonPlanting.classList.contains('active') === false) {
    buttonLawn.setAttribute('disabled', true);
    buttonPlanting.classList.toggle('active');
  } else if (buttonPlanting.classList.contains('active') && buttonGarden.disabled === true) {
    buttonGarden.removeAttribute('disabled');
    buttonPlanting.classList.toggle('active');
  } else if (buttonPlanting.classList.contains('active') && buttonLawn.disabled === true) {
    buttonLawn.removeAttribute('disabled');
    buttonPlanting.classList.toggle('active');
  } else if (buttonLawn.classList.contains('active') === false && buttonPlanting.disabled === false) {
    buttonPlanting.classList.toggle('active');
  } else if (buttonGarden.classList.contains('active') === false && buttonPlanting.disabled === false) {
    buttonPlanting.classList.toggle('active');
  }
//add blur-effect for the unselected buttons ("Planting" selected)  
  while (y < serviceItems.length) {
    if (buttonPlanting.classList.contains('active')) {
      if (serviceItems[y].classList.contains('gardens') && serviceItems[y].classList.contains('blur') === false && buttonGarden.classList.contains('active') === false) {
        serviceItems[y].classList.add('blur');
      } else if (serviceItems[y].classList.contains('lawn') && serviceItems[y].classList.contains('blur') === false && buttonLawn.classList.contains('active') === false) {
        serviceItems[y].classList.add('blur');
      } else if (serviceItems[y].classList.contains('planting') && serviceItems[y].classList.contains('blur')) {
        serviceItems[y].classList.remove('blur');
      }
    } else if (buttonPlanting.classList.contains('active') === false) {
      if (serviceItems[y].classList.contains('gardens') && serviceItems[y].classList.contains('blur') && buttonLawn.classList.contains('active') === false) {
        serviceItems[y].classList.remove('blur');
      } else if (serviceItems[y].classList.contains('lawn') && serviceItems[y].classList.contains('blur') && buttonGarden.classList.contains('active') === false) {
        serviceItems[y].classList.remove('blur');
      } else if (serviceItems[y].classList.contains('planting') && serviceItems[y].classList.contains('blur') === false && buttonGarden.classList.contains('active')) {
        serviceItems[y].classList.add('blur');
      } else if (serviceItems[y].classList.contains('planting') && serviceItems[y].classList.contains('blur') === false && buttonLawn.classList.contains('active')) {
        serviceItems[y].classList.add('blur');
      }
    }
    y = y + 1;
  }
  y = 0;
}

buttonGarden.addEventListener('click', selectGarden);
buttonLawn.addEventListener('click', selectLawn);
buttonPlanting.addEventListener('click', selectPlanting);
//SERVICE END
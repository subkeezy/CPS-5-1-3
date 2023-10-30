const sideMenu = document.querySelector('.mobile-menu');
const openButton = document.querySelector('.burger__link');
const closeButton = document.querySelector('.mobile__header-cross');
const background = document.querySelector('.mobile-menu::before')


let toOpen = openButton.addEventListener('click', function () {
  sideMenu.classList.add('mobile-menu--open');
})

let toClose = closeButton.addEventListener('click', function () {
  sideMenu.classList.remove('mobile-menu--open');
})




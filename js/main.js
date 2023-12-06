var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var backgroundBurgerMenu = document.querySelector(".background-burger-menu");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
  backgroundBurgerMenu.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
backgroundBurgerMenu.addEventListener("click", toggleMenu);

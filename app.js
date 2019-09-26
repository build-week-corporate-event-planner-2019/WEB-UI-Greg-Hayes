// Mobile nav JS functionality
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");

burger.addEventListener("click", function() {
  mobileNav.classList.toggle("nav-open");
  burger.childNodes[1].classList.toggle("fa-times");
});

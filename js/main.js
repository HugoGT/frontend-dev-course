const $ = (selector) => document.querySelector(selector);
const navbarEmail = $('.navbar-email')
const desktopMenu = $('.desktop-menu')
const mobileMenu = $('.mobile-menu')
const iconMenu = $('.icon-menu')

navbarEmail.addEventListener('click', toggleDesktopMenu)
iconMenu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive')
}
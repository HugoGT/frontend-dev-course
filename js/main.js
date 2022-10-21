const $ = (selector) => document.querySelector(selector);
const navbarEmail = $('.navbar-email')
const desktopMenu = $('.desktop-menu')
const mobileMenu = $('.mobile-menu')
const iconMenu = $('.icon-menu')
const iconArrow = $('.arrow')
const productDetail = $('.product-detail')
const navbarShoppingCart = $('.navbar-shopping-cart')

navbarEmail.addEventListener('click', toggleDesktopMenu)
navbarShoppingCart.addEventListener('click', toggleShoppingCart)
iconArrow.addEventListener('click', toggleShoppingCart)
iconMenu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
  productDetail.classList.add('inactive')
  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
  productDetail.classList.add('inactive')
  mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCart(){
  mobileMenu.classList.add('inactive')
  desktopMenu.classList.add('inactive')
  productDetail.classList.toggle('inactive')
}

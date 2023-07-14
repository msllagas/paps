var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
    initialSlide: 1,
  coverflowEffect: {
    rotate: 0, // 50
    stretch: -20, // 0
    depth: 100,
    modifier: 2, // 1
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",

    prevEl: ".swiper-button-prev",
  },
});
function openNav() {
  const sidebar = document.getElementById("mySidenav");
  const overlay = document.getElementById("overlay");
  sidebar.style.width = "250px";

  sidebar.classList.add("show");
  overlay.classList.add("show");
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }
}

function closeNav() {
  const sidebar = document.getElementById("mySidenav");
  const overlay = document.getElementById("overlay");
  sidebar.style.width = "0";

  sidebar.classList.remove("show");
  overlay.classList.remove("show");
  document.body.style.overflow = "unset";
}

var header = document.querySelector(".header");
var navLink = document.querySelectorAll(".nav__link");
var headerMenu = document.querySelector(".header__menu");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    navLink.forEach(function (link) {
      link.classList.add("scrolled");
    });
    headerMenu.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    navLink.forEach(function (link) {
      link.classList.remove("scrolled");
    });

    headerMenu.classList.remove("scrolled");
  }
});

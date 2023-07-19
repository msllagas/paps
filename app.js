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

// Functions for opening and closing of hamburger menu

function closeNav() {
  const sidebar = document.getElementById("mySidenav");
  const overlay = document.getElementById("overlay");
  sidebar.style.width = "0";

  sidebar.classList.remove("show");
  overlay.classList.remove("show");
  document.body.style.overflow = "unset";
}

function handleNavLinkClick(event) {
  closeNav();
}

const sideNavLinks = document.querySelectorAll('#mySidenav a');
sideNavLinks.forEach((link) => {
  link.addEventListener('click', handleNavLinkClick);
});

// Function to change the background color of heaser when scrolled
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



// functions for changing pages

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) => {
    if (page.id === pageId) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
  window.scrollTo(0, 0);
}

function handleNavLinkClick(event) {
  event.preventDefault();

  const target = event.target;
  const pageId = target.getAttribute('data-page');
  if (!pageId) {
    return;
  }

  showPage(pageId);

  const navItems = document.querySelectorAll('.side__link');
  navItems.forEach((navItem) => {
    navItem.classList.remove('side-nav__item--active');
  });

  target.classList.add('side-nav__item--active');

}

const topNav = document.querySelector('.nav');
topNav.addEventListener('click', handleNavLinkClick);

const sideNav = document.querySelector('.sidenav');
sideNav.addEventListener('click', handleNavLinkClick);

// Show the home page and set the active class for the first link by default
showPage('services');
const firstNavItem = document.querySelector('.nav__link');
firstNavItem.classList.add('side-nav__item--active');

// Function for changing tabs in boarding services
function openTab(event, tabName) {
  var i, tabContent, buttonTab;
  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  buttonTab = document.getElementsByClassName("button--tab");
  for (i = 0; i < buttonTab.length; i++) {
    buttonTab[i].className = buttonTab[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// Function for the Card Accordion
const accordionItems = document.querySelectorAll('.faqs__card');

accordionItems.forEach(item => {
  const header = item.querySelector('.faqs__card--title');
  const content = item.querySelector('.faqs__card--content');
  const icon = item.querySelector('.fa-caret-right'); // Update the selector for your icon element
  header.addEventListener('click', () => {
    item.classList.toggle('active');

    content.classList.toggle('show');
    icon.classList.toggle('fa-caret-down');
    icon.classList.toggle('fa-caret-right');
  });
});

// Function for the Services Link dropdown Top bar
document.addEventListener('DOMContentLoaded', function () {
  const groomingServicesButton = document.getElementById('grooming-services-button');
  const boardingServicesButton = document.getElementById('boarding-services-button');
  const servicesLink = document.querySelector('.nav__link[data-page="services"]');

  const groomingServicesSection = document.querySelector('.grooming__services');
  const boardingServicesSection = document.querySelector('.boarding__services');

  function setDefaultState() {
    groomingServicesButton.classList.add('active');
    boardingServicesButton.classList.remove('active');

    groomingServicesSection.style.display = 'block';
    boardingServicesSection.style.display = 'none';
  }

  function showGroomingServices() {
    groomingServicesButton.classList.add('active');
    boardingServicesButton.classList.remove('active');

    groomingServicesSection.style.display = 'block';
    boardingServicesSection.style.display = 'none';
  }

  function showBoardingServices() {
    groomingServicesButton.classList.remove('active');
    boardingServicesButton.classList.add('active');

    groomingServicesSection.style.display = 'none';
    boardingServicesSection.style.display = 'block';
  }

  groomingServicesButton.addEventListener('click', function () {
    showGroomingServices();
  });

  boardingServicesButton.addEventListener('click', function () {
    showBoardingServices();
  });

  servicesLink.addEventListener('click', function () {
    setDefaultState();
  });

  // Check if the URL contains a hash for boarding services and show the appropriate section
  if (window.location.hash === '#boarding-services') {
    showBoardingServices();
  } else {
    setDefaultState();
  }
});






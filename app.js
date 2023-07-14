var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
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
  const sidebar = document.getElementById('mySidenav');
  const overlay = document.getElementById('overlay');
  sidebar.style.width = "250px";

  sidebar.classList.add('show');
  overlay.classList.add('show');
  if (typeof window != 'undefined' && window.document) {
    document.body.style.overflow = 'hidden';
}
}

function closeNav() {
  const sidebar = document.getElementById('mySidenav');
  const overlay = document.getElementById('overlay');
  sidebar.style.width = "0";

  sidebar.classList.remove('show');
  overlay.classList.remove('show');
  document.body.style.overflow = 'unset';
}

  
  
  

const bodyContent = document.querySelector('body');
const mainContent = document.querySelector('main');
const menuButtton = document.querySelector('.mobile-nav-toggle');
const menuList = document.querySelector('.primary-navigation');

menuButtton.addEventListener('click', () => {
    menuList.hasAttribute('data-visible')
    ? menuList.setAttribute('aria-expanded', false)
    : menuList.setAttribute('aria-expanded', true)
    menuList.toggleAttribute('data-visible')
    mainContent.toggleAttribute('data-overlay')
    bodyContent.toggleAttribute('data-overlay');
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  slidesToShow: 1,
  arrows: false, // arrows enabled 767px and down
  dots: true,
  responsive: {
    480: {
      // disable: false,
      slidesToShow: 1,
      arrows: false,
      dots: true
    },
    600: {
      // disable: false,
      slidesToShow: 2,
      arrows: true,
      dots: false
    },
    
    900: {
      // disable: false,
      slidesToShow: 3,
      arrows: true,
      dots: false // dots enabled 1280px and up
    }
  }
});
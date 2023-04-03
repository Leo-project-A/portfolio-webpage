// =========================== SHOW MENU Y HIDDEN ===========================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ======= MENU SHOW ======
// validate if constanst exist
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// ======= MENU HIDDEN ======
// validate if constanst exist
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// =========================== REMOVE MENU MOBILE ===========================
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// =========================== ACCORDION SKILLS ===========================
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((e) => {
    e.addEventListener('click', toggleSkills);
})

// =========================== QUALIFICATION TABS ===========================
const tabs = document.querySelectorAll('[data-target');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
})

// =========================== SERVICE modal ===========================
const modalViews = document.querySelectorAll('.services__modal');
const modalButtons = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal'); 
}

modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        modal(i);
    });
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})

// =========================== PORTFOLIO SWIPER ===========================
let swiperPortfolio = new Swiper(".porfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true
    },
  });

// =========================== TESTIMONIAL SWIPER ===========================
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
        700: {
            slidesPerView: 2,
        }
    }
  });

// =========================== SCROLL SECTION ACTIVE LINK ===========================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectioTop = current.offsetTop - 50;
        const sectionID = current.getAttribute('id');

        if(scrollY > sectioTop && scrollY <= sectioTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

// =========================== CHANGE BACKGROUND HEADER ===========================
function scrollHeader() {
    const nav = document.getElementById('header');
    if(this.scrollY >= 80){
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// =========================== SHOW SCROLL TOP ===========================
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(scrollY >= 560) {
        scrollUp.classList.add('scroll-show');
    } else {
        scrollUp.classList.remove('scroll-show');
    }
}
window.addEventListener('scroll', scrollUp);

// =========================== DARK LIGHT THEME ===========================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})



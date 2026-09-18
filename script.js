
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');


    preloader.classList.add('loader-hidden');


    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
});


AOS.init({
    duration: 700,
    once: true
});


const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-links li a');
const body = document.body;


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
});


navLinks.forEach(link => {
    link.addEventListener('click', function () {

        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');


        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
});
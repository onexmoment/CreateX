import { tns } from "tiny-slider";

const slider = tns({
    container: '.carousel-team',
    items: 4,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    navPosition: 'top',
    speed: 1500
});

document.querySelector('.prev_top').addEventListener('click', function () {
    slider.goTo('prev');
    });

document.querySelector('.next_top').addEventListener('click', function () {
    slider.goTo('next');
    });

const slider1 = tns({
    container: '.carousel-students',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    navPosition: 'bottom',
    speed: 1500
});

document.querySelector('.prev_center').addEventListener('click', function () {
    slider1.goTo('prev');
    });

document.querySelector('.next_center').addEventListener('click', function () {
    slider1.goTo('next');
    })

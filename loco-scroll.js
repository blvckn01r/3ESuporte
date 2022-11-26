import LocomotiveScroll from 'loco-scroll';

const scroll = new LocomotiveScroll();

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
    tablet: {smooth:true},
    smartphone: {smooth:true},
});

const hero = document.querySelector('.hero');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const slider = document.querySelector('.slider');


gsap.fromTo(hero, 1, {
   height: "0%"
}, {
   height: "80%",
   ease: Power2.easeInOut
});

gsap.fromTo(hero, 1, {
   width: "100%"
}, {
   width: "80%",
   delay: 1,
   ease: Power2.easeInOut
});

gsap.fromTo(slider, 1, {
   x: "-100%"
}, {
   x: "0%",
   delay: 1,
   ease: Power2.easeInOut
}, "-=1.2");

gsap.fromTo(logo, 0.5, {
   opacity: 0,
   x: 30
}, {
   opacity: 1,
   x: 0,
   delay: 2
});

gsap.fromTo(hamburger, 0.5, {
   opacity: 0,
   x: 30
}, {
   opacity: 1,
   x: 0,
   delay: 2
});
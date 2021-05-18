'use strict';

// Wrappern
const wrapper = document.getElementById('wrapper');

//Loggan
const logotyp = document.querySelector(".logotyp")

// Navigationen
const navHome = document.querySelector('.navHome');
const navDestinations = document.querySelector('.navDestinations');
const navProgrammes = document.querySelector('.navProgrammes');
const navInterviews = document.querySelector('.navInterviews');

// Footer
const footerProgramme = document.querySelector(".footerProgramme");
const footerDestinations = document.querySelector(".footerDestinations");
const footerInterviews = document.querySelector(".footerInterviews");

let transitionDuration = 350;

// Navlänk
navHome.addEventListener('click', ()=> {
    //Fade out
    wrapper.style.opacity = 0;

    //Fade In
    setTimeout(function(){
        goToHome();
        wrapper.style.opacity = 1;
    }, transitionDuration);
});

navDestinations.addEventListener('click', ()=> {
    //Fade out
    wrapper.style.opacity = 0;

    //Fade In
    setTimeout(function(){
        goToDestinations();
        wrapper.style.opacity = 1;
    }, transitionDuration);
});

navProgrammes.addEventListener('click', ()=> {
    //Fade out
    wrapper.style.opacity = 0;

    //Fade In
    setTimeout(function(){
        goToProgrammes();
        wrapper.style.opacity = 1;
    }, transitionDuration);

});

navInterviews.addEventListener('click', (y) => {
    //Fade out
    wrapper.style.opacity = 0;

    //Fade In
    setTimeout(function(){
        goToInterviews(y.originalTarget);
        wrapper.style.opacity = 1;
    }, transitionDuration);
});

// Footerlänk
footerDestinations.addEventListener("click", () => {
    //Fade out
    wrapper.style.opacity = 0;

    //Fade In
    setTimeout(function(){
        goToDestinations();
        wrapper.style.opacity = 1;
    }, transitionDuration);
});

footerProgramme.addEventListener("click", () => {
    //Fade out
    wrapper.style.opacity = 0;

    //Fade In
    setTimeout(function(){
        goToProgrammes();
        wrapper.style.opacity = 1;
    }, transitionDuration);
});

footerInterviews.addEventListener("click", (y) => {
    //Fade out
    wrapper.style.opacity = 0;

    //Fade In
    setTimeout(function(){
        goToInterviews(y.originalTarget);
        wrapper.style.opacity = 1;
    }, transitionDuration);
});

//Logotyp
logotyp.addEventListener("click", () => {
    //Fade out
    wrapper.style.opacity = 0;

    //Fade In
    setTimeout(function(){
        goToHome();
        wrapper.style.opacity = 1;
    }, transitionDuration);
});

// Sortering av arrayerna i bokstavordning
COUNTRIES.sort((e1, e2) => e1.name > e2.name ? 1 : -1);

CITIES.sort((e1, e2) => e1.name > e2.name ? 1 : -1);

// UNIVERSITIES.sort((e1, e2) => e1.name > e2.name ? 1 : -1);








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


// Navlänk
navHome.addEventListener('click', ()=> {
    goToHome();
});

navDestinations.addEventListener('click', ()=> {
    goToDestinations();
});

navProgrammes.addEventListener('click', ()=> {
    goToProgrammes();
});

navInterviews.addEventListener('click', () => {
    goToInterviews();
});

// Footerlänk
footerDestinations.addEventListener("click", () => {
    goToDestinations();
});

footerProgramme.addEventListener("click", () => {
   goToProgrammes();
});

footerInterviews.addEventListener("click", () => {
    goToInterviews();
});

//Logotyp
logotyp.addEventListener("click", () => {
    goToHome();
});




'use strict';

// Wrappern
const wrapper = document.getElementById('wrapper');

// Navigationen
const navHome = document.querySelector('.navHome');
const navDestinations = document.querySelector('.navDestinations');
const navProgrammes = document.querySelector('.navProgrammes');
const navInterviews = document.querySelector('.navInterviews');

// Header knapparna
const headerButtonDestinations = document.querySelector(".headerButtonDestinations");
const headerButtonProgrammes = document.querySelector(".headerButtonProgrammes");

// Footer
const footerProgramme = document.querySelector(".footerProgramme");
const footerDestinations = document.querySelector(".footerDestinations");
const footerInterviews = document.querySelector(".footerInterviews");

// Intervju-bilderna på startsidan 
const intwPersLink = document.querySelector(".smallIntw");




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

//Header knappar
headerButtonDestinations.addEventListener("click", () => {
    goToDestinations();
});
headerButtonProgrammes.addEventListener("click", () => {
    goToProgrammes();
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

// Små intervju-bilderna 
headerButtonDestinations.addEventListener("click", () => {
    goToInterviews();
});

headerButtonProgrammes.addEventListener("click", () => {
    goToInterviews();
});

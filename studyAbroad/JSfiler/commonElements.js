'use strict';

const wrapper = document.getElementById('wrapper');

const navHome = document.querySelector('.navHome');
const navDestinations = document.querySelector('.navDestinations');
const navProgrammes = document.querySelector('.navProgrammes');
const navInterviews = document.querySelector('.navInterviews');

let footerProgramme = document.querySelector(".footerProgramme");
let footerDestinations = document.querySelector(".footerDestinations");
let footerInterviews = document.querySelector(".footerInterviews");

let intwPersLink = document.querySelector(".smallIntw");
let logotypLink = document.querySelector(".logotyp");

// Logotyplänk
logotypLink.addEventListener("click", () => {
    goToHome();
});

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

// Små intervjulänk
intwPersLink.addEventListener("click", () => {
    goToInterviews();
});

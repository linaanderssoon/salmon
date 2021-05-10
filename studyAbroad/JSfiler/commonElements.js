'use strict';

const wrapper = document.getElementById('wrapper');
const navHome = document.querySelector('.navHome');
const navDestinations = document.querySelector('.navDestinations');
const navProgrammes = document.querySelector('.navProgrammes');
const navInterviews = document.querySelector('.navInterviews');

navHome.addEventListener('click', ()=> {
    goToHome();
});

navDestinations.addEventListener('click', ()=> {
    goToDestinations();
});

navProgrammes.addEventListener('click', ()=> {
    goToProgrammes();
});

navInterviews.addEventListener('click', ()=> {
    goToInterviews();
});
'use strict';

const wrapper = document.getElementById('wrapper');
const navHome = document.querySelector('.navHome');
const navDestinations = document.querySelector('.navDestinations');
const navProgrammes = document.querySelector('.navProgrammes');
const navInterviews = document.querySelector('.navInterviews');

// navHome.addEventListener('click', ()=> {
//     console.log('hej');

//     goToHome();
// });

navDestinations.addEventListener('click', ()=> {
    console.log('hej');

    goToDestinations();
});

navProgrammes.addEventListener('click', ()=> {
    console.log('hej');

    goToProgrammes();
});

navInterviews.addEventListener('click', () => {
    goToInterviews();
    console.log('hej');
});



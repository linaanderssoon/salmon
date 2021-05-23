'use strict';


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


let topBtn = document.createElement('div');
topBtn.classList.add('topBtn');
document.body.append(topBtn);

topBtn.style.opacity = "0";
topBtn.style.cursor = "default";

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (!currentScrollPos) {
        topBtn.style.opacity = "0";
        topBtn.style.cursor = "default";
    } else if (currentScrollPos > '300' ) {
        topBtn.style.opacity = "1";
        topBtn.style.cursor = "pointer";
    }
}

topBtn.addEventListener('click', () => {
    scroll(0, 0);
})









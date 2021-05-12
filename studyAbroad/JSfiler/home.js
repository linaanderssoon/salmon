"use strict";

goToHome();

navHome.classList.add('currentPage');



function goToHome(){
  //Hamna högst upp på sidan
  scroll(0,0)  

  wrapper.innerHTML = '';

  navHome.classList.add('currentPage');

  navInterviews.classList.remove('currentPage');
  navDestinations.classList.remove('currentPage');
  navProgrammes.classList.remove('currentPage');

  
  wrapper.innerHTML = `
    <div class="homeHeader">
          <div class="homeHeaderRight">
          <div class="homeHeaderImg"></div>
        </div>
        <div class="homeHeaderLeft">
            <h1>Är du redo att 
               <br> upptäcka världen?</h1>
             <p>Här hittar du allt du behöver 
               <br> veta inför dina utlanddstudier</p>
             <button class="headerButtonDestinations">Destinationer</button>
             <button class="headerButtonProgrammes">Program</button>
        </div>
    </div>

    <div class="quiz">QUIZ</div>

    <div class="longAd"></div>

    <div class="carousel">
        <h1 id="carouselHeading">Hit kan du åka</h1>
        
        <div class="carousel-container">
        <div class="carousel-inner">
          <div class="track">
          </div>
        </div>
        <div class="arrows">
          <div class="prev"  id="arrowPrev">
              <div id="arrowImg1"></div>
          </div>
          <div class="next" id="arrowNext">
              <div id="arrowImg2"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="homeInterview">
    <div class="smallAd"></div>

      <div class="intwPers1 intwContainer">
      <div class="intw1Small smallIntw"></div>
      <p>"Det känns så himla befriande
        <br>och äventyrligt att resa helt själv
        <br>till ett främmande land och
        <br>studera där."
      </p>
    </div>

    <div class="intwPers2 intwContainer">
      <div class="intw2Small smallIntw"></div>
      <p>"Jag tyckte det kändes läskigt
        <br>och stort men jag vet att om
        <br>jag inte hade åkt så hade jag
        <br>ångrat det i framtiden..."
      </p>
    </div>

    <div class="intwPers3 intwContainer">
      <div class="intw3Small smallIntw"></div>
      <p>"Jag har växt så otroligt
        <br>mycket som person under
        <br>detta utbyte och har inte
        <br>ångrat det en sekund."
      </p>
    </div>
  </div>

  <div class="longAd"></div>
  `;


    let carouselTrack = document.querySelector('.track');
    
    for(let i = 0; i < COUNTRIES.length; i++){
      let carouselContainer = document.createElement("div");
      carouselContainer.classList.add("card-container");
  
      carouselContainer.innerHTML=`
      <div class="card">
      <img class="carouselImg" src="JSfiler/Images/${COUNTRIES[i].imagesNormal[1]}">
      <h2 class="carouselInfo"> ${COUNTRIES[i].name}</h2> 
      </div>
      `;
  
      carouselTrack.append(carouselContainer);
    }



let prev  = document.querySelector('.prev');
let next = document.querySelector('.next');

let track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
});
   
}










"use strict";

navHome.classList.add('currentPage');

goToHome();

function goToHome(){
    navHome.classList.add('currentPage');

    navInterviews.classList.remove('currentPage');
    navDestinations.classList.remove('currentPage');
    navProgrammes.classList.remove('currentPage');

    wrapper.innerHTML = '';

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
             <button>Destinationer</button>
             <button>Program</button>
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
          <div class="prev"  id="arrowPrev" class="arrowCircle">
              <div id="arrowImg1"></div>
          </div>
          <div class="next" id="arrowNext" class="arrowCircle">
              <div id="arrowImg2"></div>
          </div>
        </div>
      </div>
    </div>
    `;
}

let carouselParent = document.querySelector(".track");

createThePictures();




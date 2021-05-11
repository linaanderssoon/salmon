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
}


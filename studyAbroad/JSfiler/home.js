"use strict";

goToHome();

navHome.classList.add('currentPage');


function goToHome(){
  //Hamna högst upp på sidan
  scroll(0,0)  

  //Töm nuvarande innehåll i wrapper
  wrapper.innerHTML = "";

  //Byt klasser i nav
  navHome.classList.add('currentPage');

  navInterviews.classList.remove('currentPage');
  navDestinations.classList.remove('currentPage');
  navProgrammes.classList.remove('currentPage');

  //Fyll wrapper
  wrapper.innerHTML = `
    <div class="homeHeader">
          <div class="homeHeaderRight">
          <div class="homeHeaderImg"></div>
        </div>
        <div class="homeHeaderLeft">
            <h1>Är du redo att 
               <br> upptäcka världen?</h1>
             <p>Här hittar du allt du behöver 
               <br> veta inför dina utlandsstudier</p>
             <button class="headerButtonDestinations">Destinationer</button>
             <button class="headerButtonProgrammes">Program</button>
        </div>
    </div>

    <div class="quiz-container">
    <div class="quizStartContainer">
    <div class="quizImg"></div>
        <div class="quizStartRight">
        <div class="quizTitle">Vart vill du åka?</div>
        <p>Gör testet för att ta reda på vilket 
        <br> land du borde studera i!</p>
        <button>Starta quizet</button>
        </div>
    </div>
    </div>
    <div class="result">

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

  

//Klicka på start så börjar quizzet
document.querySelector(".quizStartRight > button").addEventListener("click", startQuiz);

function startQuiz(){

    //Tömmer tidigare innehåll
    document.querySelector(".quiz-container").innerHTML=`
    
    <div id="question" class="question"></div>
    <label class="option">
        <input type="radio" name="option" value="1" />
        <span class="option1"></span>
    </label>
    <label class="option">
        <input type="radio" name="option" value="2" />
        <span class="option2"></span>
    </label>
    <label class="option">
        <input type="radio" name="option" value="3" />
        <span class="option3"></span>
    </label>
    <!-- Buttons -->
    <div class="controls">
        <button class="previous">Föregående</button>
        <button class="next">Nästa</button>
    </div>
    </div>
    

    `;
}

    let carouselTrack = document.querySelector('.track');
    
    //Så många bilder/divvar som det finns länder i databasen
    for(let i = 0; i < COUNTRIES.length; i++){
      let carouselContainer = document.createElement("div");
      carouselContainer.classList.add("card-container");
  
      carouselContainer.innerHTML=`
      <div class="card">
      <img class="carouselImg" src="JSfiler/Images/${COUNTRIES[i].imagesNormal[1]}">
      <h2 class="carouselInfo">${COUNTRIES[i].name}</h2> 
      </div>
      `;
      carouselContainer.querySelector("h2").addEventListener("click", ()=> {
        goToDestinations(`${COUNTRIES[i].name}`);
      });
      carouselTrack.append(carouselContainer);
    }

//Klicka på start så börjar quizzet
document.querySelector(".quizStartRight > button").addEventListener("click", startQuiz);

const quizContainer = document.querySelector(".quiz-container");

function startQuiz(){

    quizContainer.style.border = "3px solid #DC6420"
    quizContainer.style.borderRadius = "20px";
    quizContainer.style.height = "300px";
    quizContainer.style.padding = "50px";

    //Tömmer tidigare innehåll
    quizContainer.innerHTML=`
    
    <div id="question" class="question"></div>
    <label class="option">
        <input type="radio" name="option" value="1" />
        <span class="option1"></span>
    </label>
    <label class="option">
        <input type="radio" name="option" value="2" />
        <span class="option2"></span>
    </label>
    <label class="option">
        <input type="radio" name="option" value="3" />
        <span class="option3"></span>
    </label>
    <!-- Buttons -->
    <div class="controls">
        <button class="previous">Föregående</button>
        <button class="next">Nästa</button>
    </div>
    </div>
    

    `;

    //Frågor och hur många poäng varje fråga är värd (1-3)
    const questions = [
        {
          "question": "Varför vill du studera utomlands?",
          "answer1": "Jag vill ha kul och skaffa vänner för livet",
          "answer1Total": "2",
          "answer2": "Jag älskar att resa och uppleva nya kulturer",
          "answer2Total": "3",
          "answer3": "Jag vill gå på en bra skola och få en bra utbildning",
          "answer3Total": "1"
        }  ,
        {
          "question": "Vad för typ av klimat föredrar du?",
          "answer1": "Så mycket sol som möjligt!",
          "answer1Total": "3",
          "answer2": "Gärna nära till vattnet!",
          "answer2Total": "1",
          "answer3": "Jag är inte särskilt kräsen, så länge det inte är storm varje dag!",
          "answer3Total": "2"
        },
        {
          "question": "Hur skulle du helst vilja spendera dina helger under ditt utbyte?",
          "answer1": "Dra till stranden för att sola och bada",
          "answer1Total": "3",
          "answer2": "Besöka mysiga caféer och butiker",
          "answer2Total": "2",
          "answer3": "Vara aktiv och vandra genom naturen",
          "answer3Total": "1"
        },
        {
          "question": "Välj ett föredraget transportsätt",
          "answer1": "Genom att gå! Det är då man får uppleva så mycket av staden som möjligt!",
          "answer1Total": "1",
          "answer2": "Cykla! Det är smidigt när man har bråttom någonstans",
          "answer2Total": "3",
          "answer3": "Bussen/T-banan! Då kan jag passa på att läsa en bok",
          "answer3Total": "2"
        },
        {
          "question": "Vill du åka till ett land där de talar samma språk som dig?",
          "answer1": "Det skulle vara att föredra.",
          "answer1Total": "1",
          "answer2": "Jag vill gärna lära mig ett nytt språk",
          "answer2Total": "3",
          "answer3": "Ja, det känns lite läskigt annars",
          "answer3Total": "2"
        },
        {
          "question": "Fråga?",
          "answer1": "Svar1",
          "answer1Total": "1",
          "answer2": "Svar2",
          "answer2Total": "2",
          "answer3": "Svar3",
          "answer3Total": "3"
        },
        {
          "question": "Fråga?",
          "answer1": "1",
          "answer1Total": "1",
          "answer2": "2",
          "answer2Total": "2",
          "answer3": "3",
          "answer3Total": "3"
        }
      ]
      
      
      let currentQuestion = 0;
      let score = [];
      let selectedAnswersData = [];
      const totalQuestions =questions.length;
      
      const container = document.querySelector('.quiz-container');
      const questionEl = document.querySelector('.question');
      const option1 = document.querySelector('.option1');
      const option2 = document.querySelector('.option2');
      const option3 = document.querySelector('.option3');
      const nextButton = document.querySelector('.next');
      const previousButton = document.querySelector('.previous');
      const restartButton = document.querySelector('.restart');
      const result = document.querySelector('.result');
      
      
      //Genererar frågorna 
      function generateQuestions (index) {
          //Välj varje fråga genom att skicka den ett visst index
          const question = questions[index];
          const option1Total = questions[index].answer1Total;
          const option2Total = questions[index].answer2Total;
          const option3Total = questions[index].answer3Total;
          //Fyller i HTML-elementen
          questionEl.innerHTML = `${index + 1}. ${question.question}`
          option1.setAttribute('data-total', `${option1Total}`);
          option2.setAttribute('data-total', `${option2Total}`);
          option3.setAttribute('data-total', `${option3Total}`);
          option1.innerHTML = `${question.answer1}`
          option2.innerHTML = `${question.answer2}`
          option3.innerHTML = `${question.answer3}`
      }
      
      
      function loadNextQuestion () {
          const selectedOption = document.querySelector('input[type="radio"]:checked');
          //Kolla så att användaren har fyllt i ett alternativ, annars skicka alert
          if(!selectedOption) {
              alert('Var vänligen och välj ett alternativ!');
              return;
          }

          const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
      
          //Lägg till svarpoängen i arrayen
          score.push(answerScore);
          selectedAnswersData.push()
          const totalScore = score.reduce((total, currentNum) => total + currentNum);
      
          //Ökar nuvarande frågenummer (som ska användas som index för varje array)
          currentQuestion++;
      
          //När den är färdig, rensa clear
           selectedOption.checked = false;
          //Om det är sista frågan i quizet
          if(currentQuestion == totalQuestions - 1) {
             nextButton.textContent = 'Finish';      
          }

          //Om quizet är färdig så gömmer vi frågorna och visar resultatet
          if(currentQuestion == totalQuestions) {
          //Mellan 7-11 poäng
          if(totalScore < 11){
            container.style.display = 'none';
            result.innerHTML =`Iväg, men inte för långt! Vi tipsar om Frankrike, Spanien eller Sverige!
            <br><button class="restart">Starta om quizet</button>`;
          }
          //Mellan 12-16 poäng
          else if (totalScore > 12 && totalScore < 17) {
            container.style.display = 'none';
            result.innerHTML =`Ett engelsktalande land skulle passa dig bra! Vi tipsar om Autralien, USA eller UK!
            <br><button class="restart">Starta om quizet</button>`;
          }
          //Mellan 17-21 poäng
          else {
            container.style.display = 'none';
            result.innerHTML =`Exotiskt, varmt och lååångt härifrån! Vi tipsar om Chile, Mexico eller Argentina!
            <br><button class="restart">Starta om quizet</button>`;
          }
        }

          generateQuestions(currentQuestion);
          
      }

      //Laddar föregående fråga
      function loadPreviousQuestion() {
          currentQuestion--;
          score.pop();
          generateQuestions(currentQuestion);
      }
      
      //Startar om quizet/nollställer den
      function restartQuiz(e) {
          if(e.target.matches('button')) {
          currentQuestion = 0;
          score = [];
          location.reload();
          }
      
      }
      
      
      generateQuestions(currentQuestion);
      nextButton.addEventListener('click', loadNextQuestion);
      previousButton.addEventListener('click',loadPreviousQuestion);
      result.addEventListener('click',restartQuiz);
      
}

let prev  = document.querySelector('.prev');
let next = document.querySelector('.next');
let track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

//Nästa-knappen
next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

//Tillbaka knappen
prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
});

// eader knapparna
const headerButtonDestinations = document.querySelector(".headerButtonDestinations");
const headerButtonProgrammes = document.querySelector(".headerButtonProgrammes");

// ntervju små cirklar
const intwPersLink = document.querySelectorAll(".smallIntw");

//Header
headerButtonDestinations.addEventListener("click", () => {
    goToDestinations();
});
headerButtonProgrammes.addEventListener("click", () => {
    goToProgrammes();
});

//Hamna på intervjusidan när man klickar på intervju-cirklarna
intwPersLink.forEach(person => {
  person.addEventListener("click", (y) => {
    goToInterviews(y.originalTarget);
  });
});


}
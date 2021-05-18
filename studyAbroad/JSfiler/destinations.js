"use strict";
// --goToDestinations(country) :: returnerar destination-innehåll i wrappern
// Döljer eventuellt annat innehåll i wrappern.
// Skapar grunden för destination sidan :: rubriker, underrubrik, text, basstruktur, selectorer
// Markerar Destinationer i navigationen
// Kallar på --createDestinations(country) som skapar rutorna med destinationer

// --createDestinations(country) :: skapar rutorna med destinationer
// - Denna funktionen kallas på onChange i selectorerna.
// - Skapar divvar med destinationerna och lägger in dem i wrapper/föräldern


//SKAPAR WRAPPER FÖR DESTINATIONER OCH DESS INNEHÅLL
function goToDestinations(country) {  
    //Hamna högst upp på sidan
    scroll(0,0)

    navDestinations.classList.add('currentPage');
    navInterviews.classList.remove('currentPage');
    navHome.classList.remove('currentPage');
    navProgrammes.classList.remove('currentPage');
    
    //Töm nuvarande innehåll i wrapper
    wrapper.innerHTML = '';

    //Skapa destinationer html innehåll i wrapper
    wrapper.innerHTML = `
    <div class="destHeader">
        <h1> Destinationer </h1>
        <p> Här kan du söka bland alla tillgänliga destinationer.</p>
    </div>
    <div class="selectorsDiv">
        <div class="dropdown">
            <select name="" id="country">
                <option id="selectItem">Alla länder</option>
            </select>
            <div id="arrow"></div>
        </div>
    </div>

    <div class="longAd"> </div>

    <div class="citiesWrapper">
        
    </div>

    <div class="showMore">
        <p> Visa mer </p>
        <img class="showMoreImg" src="CSSfiler/ikoner/arrowDown.png">
    </div>

    <div class="longAd"> </div>

    `;

    //VARIABLES
    const citiesWrapper = document.querySelector('.citiesWrapper');
    const selectCountries = document.getElementById('country');
    const showMore = document.querySelector('.showMore');

    let counter = 9;
        


    //Skapa selection alternativ
    COUNTRIES.forEach(c => {
        let newOption = document.createElement('option');
        newOption.textContent = c.name;
        newOption.value = c.name;
        newOption.classList.add('selectItem');
        selectCountries.append(newOption);
    });

    //ON CHANGE- BYT INNEHÅLLET I WRAPPERN TILL VAL
    selectCountries.addEventListener('change', () => {
        let selectedCountry = selectCountries.value;
        citiesWrapper.innerHTML = '';
        createDestinations(selectedCountry);
    });

    // OM MAN SKICKAS TILL DESTINATIONS FRÅN KARUSELLEN
    if (country !== undefined) {
        selectCountries.value = country;
        let event = new Event('change');
        selectCountries.dispatchEvent(event);
    } else  {
        //Skapa 9 divvar med städer från början 
        let counter = 9;
        for(let i = 0; i < counter; i++) {
            citiesWrapper.append(allCountriesDivs(i));
            
    };}

    //VISA MER KNAPP
    showMore.addEventListener('click', () => {
        //Varje gång vi klickar på visa mer lägger vi till 9st i counter
        counter = counter + 9;
        citiesWrapper.innerHTML = '';

        for(let i = 0; i < counter; i++) {
            //om countern är uppe i maxantal så sluta skapa divvar och ta bort knappen 
            if (i >= CITIES.length){
                document.querySelector('.showMore').style.setProperty('display', 'none');
                break;
            };

            //Annars forstätt skapa divvar
            citiesWrapper.append(allCountriesDivs(i));
        }
    });

    //Baserat på val
    function createDestinations(selectedCountry) {

        if(selectedCountry === 'All countries') {
            //"Nollställ" counter- så det bara är 9 som visas från början här med 
            counter = 9; 

            //Gör så många divvar som det är nummer i counter
            for(let i = 0; i < counter; i++) {
                citiesWrapper.append(allCountriesDivs(i));
            }

            //Visa mer knappen ska finnas
            document.querySelector('.showMore').style.setProperty('display', 'flex');

        } else {
            let countryID = COUNTRIES.find(c => c.name === selectedCountry).id;
            let filterCities = CITIES.filter(c => c.countryID === countryID);
            

            //Skapa så många divvar som det finns städer i valt land
            for(let i = 0; i < filterCities.length; i++) {
                let citiesParent = document.createElement('div');
                citiesParent.classList.add('citiesParent');
                citiesWrapper.append(citiesParent);
                
        
                citiesParent.innerHTML = `
                    <img class="cityImage" src="JSfiler/Images/${filterCities[i].imagesNormal[1]}">
                    <h2 class="cityText"> ${filterCities[i].name} </h2>   
                `;

                citiesParent.addEventListener('click', (e) => {
                    makeInfoDiv(filterCities[i]);
                    let infoDivDest = document.querySelector('.infoDivDest');
            
                    let placementTop = e.target.y;            
                    infoDivDest.style.setProperty('top', `calc(${placementTop}px - 50px)`);

                });
            }

            //Visa mer knappen ska inte finnas eftersom det aldrig är fler än 9 här
            document.querySelector('.showMore').style.setProperty('display', 'none');
        }
    }

    function allCountriesDivs(i) {
        let citiesParent = document.createElement('div');
        citiesParent.classList.add('citiesParent');

    
        citiesParent.innerHTML = `
            <img class="cityImage" src="JSfiler/Images/${CITIES[i].imagesNormal[1]}">
            <h2 class="cityText"> ${CITIES[i].name} </h2>   
        `;

    
        citiesParent.addEventListener('click', (e) => {
            
            makeInfoDiv(CITIES[i])
            let infoDivDest = document.querySelector('.infoDivDest');

    
            let placementTop = e.currentTarget.offsetTop;
            infoDivDest.style.setProperty('top', `calc(${placementTop}px - 50px)`);
        });


        return citiesParent;
    }

    function makeInfoDiv(i) {
        let infoDivDestParent = document.createElement('div');
        infoDivDestParent.classList.add('infoDivDestParent');
        document.body.append(infoDivDestParent);

        let bodyheight = getComputedStyle(document.body).getPropertyValue('height');
        infoDivDestParent.style.setProperty('height', bodyheight);

        let infoDivDest = document.createElement('div');
        infoDivDest.classList.add('infoDivDest');
        citiesWrapper.append(infoDivDest);

        //Hitta visum och ändra så true = ja och false = nej
        let findCountryID = CITIES.find(c => c.id === i.id).countryID;

        let findVisaBoolean= COUNTRIES.find(c => c.id === findCountryID).visa;
        let ternary = (findVisaBoolean === true) ? 'Ja' : 'Nej';

        //Hitta klubbar (sen skrivs längden alltså antalet in i boxen)
        let findClubs= ENTERTAINMENT_PLACES.filter(c => c.cityID === i.id);

        //Hitta vilket språk som talas i landet staden ligger i
        let findLanguageID = COUNTRIES.find(l => l.id === findCountryID).languageID;
        let language = LANGUAGES.find(l => l.id === findLanguageID).name;

        infoDivDest.innerHTML = `
            <div class="infoDivLeft">
                <h2> ${i.name} </h2>

                <div class="infoDivLeftInner">
                    <div class="innerIcon iconVisum" src=""></div>
                    <h5>Visum behövs: ${ternary} </h5>
                </div>

                <div class="infoDivLeftInner">
                    <div class="innerIcon iconLanguage" src=""></div>
                    <h5>Språk: ${language} </h5>
                </div>

                <div class="infoDivLeftInner">
                    <div class="innerIcon iconBeer" src=""></div>
                    <h5> ${findClubs.length} studentvänliga klubbar </h5>
                </div>

                <div class="infoDivLeftInner">
                    <div class="innerIcon iconSun" src=""></div>
                    <h5>${i.sun} soldagar om året </h5>
                </div>

                <div class="infoDivLeftInner">
                    <div class="innerIcon iconLocation" src=""></div>
                    <div class="Unis"></div>
                </div>



            </div>

            <div class="infoDivRight">
                <div class='scrollBox'> </div>
            </div>
        `

        //Universitet som ligger i staden
        let findUni = UNIVERSITIES.filter(u => u.cityID === i.id);

        findUni.forEach(u => {
            let goToUni = document.createElement('h5');
            goToUni.classList.add('goToUni');
            goToUni.innerHTML = u.name;

            goToUni.addEventListener("click", ()=> {
                infoDivDest.remove();

                console.log(`${u.id}`);
                goToProgrammes(`${u.id}`);
            });

            document.querySelector('.Unis').append(goToUni);
        });

        let comments = COMMENTS_CITY.filter(c => c.cityID === i.id);
        console.log(comments);

        //Räkna ut medelvärde av alla tre betygen 
        function average(array) {
            return array.reduce((a, b) => a + b) / array.length;
        }

        if (comments.length === 0) {
            let errorComment = document.createElement('div');
            errorComment.classList.add('errorComments');
            errorComment.innerHTML = 'Inga recensioner ännu';
            document.querySelector('.scrollBox').append(errorComment)
        } else {
            comments.forEach(c => {

                let commentParent = document.createElement('div');
                commentParent.classList.add('commentParent');


                let starsParent = document.createElement('div');
                starsParent.classList.add('starsParent');

                starsParent.innerHTML =`
                <div class="grayStarsParent">
                    <div class="grayStar"> </div>
                    <div class="grayStar"> </div>
                    <div class="grayStar"> </div>
                    <div class="grayStar"> </div>
                    <div class="grayStar"> </div>
                </div>
                `;

                let goldStarsParent = document.createElement('div');
                goldStarsParent.classList.add('goldStarsParent');

                starsParent.append(goldStarsParent);

                //Antal stjärnor är uträknade medelvärdet av betygen
                let starNumber = average([Math.round(c.stars.out, c.stars.food, c.stars.accomodation)]);

                for (let i = 1; i <= starNumber; i++) {
                    let star = document.createElement('div');
                    star.classList.add('star');

                    goldStarsParent.append(star);
                }

                let nameAge = document.createElement('div');
                nameAge.classList.add('commentName');
                nameAge.innerHTML = c.alias;

                let text = document.createElement('div');
                text.classList.add('commentText');
                text.innerHTML = '"' + c.text + '"';


                commentParent.append(starsParent, nameAge, text);
                
                document.querySelector('.scrollBox').append(commentParent);
            });
        }


        let closeInfoDiv = document.createElement('div');
        closeInfoDiv.classList.add('closeInfoDiv');
        infoDivDest.append(closeInfoDiv);

        closeInfoDiv.addEventListener('click', () => {
            infoDivDest.remove();
            infoDivDestParent.remove();
        });

        infoDivDestParent.addEventListener('click', () => {
            infoDivDest.remove();
            infoDivDestParent.remove();
        });

        document.querySelector('.nav').addEventListener('click', () => {
            infoDivDest.remove();
            infoDivDestParent.remove();
        });

        return infoDivDestParent;
    }


    
}




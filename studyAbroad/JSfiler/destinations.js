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
                <option id="selectItem">All countries</option>
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

    const citiesWrapper = document.querySelector('.citiesWrapper');

    //SELECTION FIELD
    const selectCountries = document.getElementById('country');

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

    //Skapa 9 divvar med städer från början 
    let counter = 9;
    for(let i = 0; i < counter; i++) {
        citiesWrapper.append(allCountriesDivs(i));
    }


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

            let AllParents = document.querySelectorAll('.citiesParent');
            console.log(AllParents.length);

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
            }

            //Visa mer knappen ska inte finnas eftersom det aldrig är fler än 9 här
            document.querySelector('.showMore').style.setProperty('display', 'none');
            citiesWrapper.style.height = 'auto';
        }
    }

    //VISA MER KNAPP
    const showMore = document.querySelector('.showMore');
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

    function allCountriesDivs(i) {
        let citiesParent = document.createElement('div');
        citiesParent.classList.add('citiesParent');

    
        citiesParent.innerHTML = `
            <img class="cityImage" src="JSfiler/Images/${CITIES[i].imagesNormal[1]}">
            <h2 class="cityText"> ${CITIES[i].name} </h2>   
        `;

        return citiesParent;
    }
}




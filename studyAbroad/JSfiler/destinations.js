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
    wrapper.innerHTML = '';

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

    let citiesWrapper = document.querySelector('.citiesWrapper');

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


    //SKAPA DIVVAR MED STÄDER
        //Alla länder ifyllt från start
    // for(let i = 0; i < CITIES.length; i++) {
    //     citiesWrapper.append(allCountriesDivs(i));
    // }


    let counter = 9;

    for(let i = 0; i < counter; i++) {
        citiesWrapper.append(allCountriesDivs(i));
    }

    let heightOfDiv = parseInt(getComputedStyle(citiesWrapper).getPropertyValue('height'));


    //Baserat på val
    function createDestinations(selectedCountry) {

        if(selectedCountry === 'All countries') {
            counter = 9; 

            for(let i = 0; i < counter; i++) {
                citiesWrapper.append(allCountriesDivs(i));
            }

            document.querySelector('.showMore').style.setProperty('display', 'flex');

            let AllParents = document.querySelectorAll('.citiesParent');
            console.log(AllParents.length);

        } else {
            let countryID = COUNTRIES.find(c => c.name === selectedCountry).id;
            let filterCities = CITIES.filter(c => c.countryID === countryID);

            for(let i = 0; i < filterCities.length; i++) {
                let citiesParent = document.createElement('div');
                citiesParent.classList.add('citiesParent');
                citiesWrapper.append(citiesParent);
        
                citiesParent.innerHTML = `
                    <img class="cityImage" src="JSfiler/Images/${filterCities[i].imagesNormal[1]}">
                    <h2 class="cityText"> ${filterCities[i].name} </h2>   
                `;
            }

            document.querySelector('.showMore').style.setProperty('display', 'none');
            citiesWrapper.style.height = 'auto';
        }
    }

     //VISA MER
     const showMore = document.querySelector('.showMore');
     console.log(heightOfDiv);
 
        showMore.addEventListener('click', () => {
            counter = counter + 9;

            citiesWrapper.innerHTML = '';
            
            for(let i = 0; i < counter; i++) {
                if (i >= CITIES.length){
                    document.querySelector('.showMore').style.setProperty('display', 'none');
                    break;
                };

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




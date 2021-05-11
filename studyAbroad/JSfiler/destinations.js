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
    <div class="selectorsDiv"></div>

    <div class="longAd"></div>

    <div class="citiesWrapper">
        
    </div>

    <div class="showMore">
        <p> Visa mer </p>
        <img class="showMoreImg" src="CSSfiler/ikoner/arrowDown.png">
    </div>

    <div class="longAd"></div>

    `;

    // let destHeader = document.createElement('div');
    // destHeader.classList.add('destHeader');
    // destHeader.innerHTML = `
    //     <h1> Destinationer </h1>
    //     <p> Här kan du söka bland alla tillgänliga destinationer.</p>
    // `

    // let selectorsDiv = document.createElement('div');
    // selectorsDiv.classList.add('selectorsDiv');

    // let longAd = document.createElement('div');
    // longAd.classList.add('longAd');

    // let citiesWrapper = document.createElement('div');
    // citiesWrapper.classList.add('citiesWrapper');

    // let showMore = document.createElement('div');
    // showMore.classList.add('showMore');

    // let longAd2 = document.createElement('div');
    // longAd2.classList.add('longAd');

    // wrapper.append(destHeader, selectorsDiv, longAd, citiesWrapper, showMore, longAd2)

    let selectors = document.querySelector('.selectorsDiv');

    selectors.innerHTML = `
        <div class="dropdown">
            <select name="" id="country">
                <option id="selectItem" value="">All countries</option>
            </select>
            <div id="arrow"></div>
        </div>
    `;

    //SELECTION FIELD
    const selectCountries = document.getElementById('country');

    COUNTRIES.forEach(c => {
        let newOption = document.createElement('option');
        newOption.textContent = c.name;
        newOption.value = c.name;
        newOption.classList.add('selectItem');
        selectCountries.append(newOption);
    });
    

    selectCountries.addEventListener('change', () => {
        let selectedCountry = selectCountries.value;

        citiesWrapper.innerHTML = '';
        createDestinations(selectedCountry);
    });


    //CREATE CITY DIVS

    let citiesWrapper = document.querySelector('.citiesWrapper');

    function createDestinations(selectedCountry) {
        let countryID = COUNTRIES.find(c => c.name === selectedCountry).id;
        let filterCities = CITIES.filter(c => c.countryID === countryID);
        console.log(filterCities);

        
        // skapar rutorna med destinationer
        // - Denna funktionen kallas på onChange i selectorerna.
        // - Skapar divvar med destinationerna och lägger in dem i wrapper/föräldern
        for(let i = 0; i < filterCities.length; i++) {
            let citiesParent = document.createElement('div');
            citiesParent.classList.add('citiesParent');
            citiesWrapper.append(citiesParent);


            citiesParent.innerHTML = `
                <img class="cityImage" src="JSfiler/Images/${filterCities[i].imagesNormal[1]}">
                <h2 class="cityText"> ${filterCities[i].name} </h2>   
            `;
        }

        if (filterCities.length < 9) {
            document.querySelector('.showMore').style.display = 'none';
        }
    



    }

    // createDestinations();

}




"use strict";
// --goToDestinations(country) :: returnerar destination-innehåll i wrappern
// Döljer eventuellt annat innehåll i wrappern.
// Skapar grunden för destination sidan :: rubriker, underrubrik, text, basstruktur, selectorer
// Markerar Destinationer i navigationen
// Kallar på --createDestinations(country) som skapar rutorna med destinationer

// --createDestinations(country) :: skapar rutorna med destinationer
// - Denna funktionen kallas på onChange i selectorerna.
// - Skapar divvar med destinationerna och lägger in dem i wrapper/föräldern

createDestinations();

function goToDestinations(country) {
    wrapper.innerHTML = '';

    wrapper.innerHTML = `
    <div class="destHeader">
        <h1> Destinationer </h1>
        <p>Här kan du söka bland alla tillgänliga destinationer.</p>
    </div>
    <div class="selectorsDiv"></div>

    <div class="longAd"></div>

    <div class="citiesWrapper">
        <div class="citiesParent">
            <div class="cityImage"></div>
            <h2 class="cityText"></h2>
        </div>
    </div>

    <div class="showMore"></div>

    <div class="longAd"></div>

    `;
}

const citiesWrapper = document.querySelector('.citiesWrapper');

function createDestinations(country) {
        // skapar rutorna med destinationer
        // - Denna funktionen kallas på onChange i selectorerna.
        // - Skapar divvar med destinationerna och lägger in dem i wrapper/föräldern
    let citiesParent = document.createElement('div');
    citiesParent.classList.add('.citiesParent');
    citiesWrapper.append(citiesParent);



}



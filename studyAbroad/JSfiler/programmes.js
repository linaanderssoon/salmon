"use strict";

//SKAPAR WRAPPER FÖR DESTINATIONER OCH DESS INNEHÅLL
function goToProgrammes() {  
    scroll(0,0)

    navProgrammes.classList.add('currentPage');

    navHome.classList.remove('currentPage');
    navDestinations.classList.remove('currentPage');
    navInterviews.classList.remove('currentPage');

    wrapper.innerHTML = '';
    wrapper.innerHTML = `
    <div class="progHeader">
        <h1> Program </h1>
        <p> Här kan du söka bland alla tillgänliga program.</p>
    </div>

    <div class="selectorsDiv">
        <div class="dropdown">
            <select name="" id="city">
                <option id="selectItem"> All destinations </option>
            </select>
            <div id="arrow"></div>
        </div>

        <div class="dropdown">
        <select name="" id="university">
            <option id="selectItem"> All universities </option>
        </select>
        <div id="arrow"></div>
        </div>

        <div class="dropdown">
        <select name="" id="level">
            <option id="selectItem"> All levels </option>
        </select>
        <div id="arrow"></div>
        </div>

        <div class="dropdown">
        <select name="" id="field">
            <option id="selectItem"> All fields </option>
        </select>
        <div id="arrow"></div>
        </div>

        <button class='searchButton'> Sök </button>

    </div>

    <div class="longAd"> </div>

    <div class="programmesWrapper">
        
    </div>

    <div class="showMore">
        <p> Visa mer </p>
        <img class="showMoreImg" src="CSSfiler/ikoner/arrowDown.png">
    </div>

    <div class="longAd"> </div>
    `;

    //SELECTION FIELDS
    const selectCity = document.getElementById('city');
    const selectUni = document.getElementById('university');
    const selectLevel = document.getElementById('level');
    const selectField = document.getElementById('field');

    //SKAPAR ALLA OPTIONS
    CITIES.forEach(c => {
        let newOption = document.createElement('option');
        newOption.textContent = c.name;
        newOption.value = c.name;
        newOption.classList.add('selectItem');
        selectCity.append(newOption);
    });

    UNIVERSITIES.forEach(u => {
        let newOption = document.createElement('option');
        newOption.textContent = u.name;
        newOption.value = u.name;
        newOption.classList.add('selectItem');
        selectUni.append(newOption);
    });
    
    LEVELS.forEach(l => {
        let newOption = document.createElement('option');
        newOption.textContent = l;
        newOption.value = l;
        newOption.classList.add('selectItem');
        selectLevel.append(newOption);
    });
    
    FIELDS.forEach(f => {
        let newOption = document.createElement('option');
        newOption.textContent = f.name;
        newOption.value = f.name;
        newOption.classList.add('selectItem');
        selectField.append(newOption);
    });

    // NÄR NÅGOT MARKERAS I DESTINATIONS UPPDETERAS UNIVERSITETVALEN//
    selectCity.addEventListener('change', () => {
        if (selectCity.value === 'All destinations'){
            let currentUniOptions = document.querySelectorAll('#university > .selectItem');
            currentUniOptions.forEach(o => o.remove());

            UNIVERSITIES.forEach(u => {
                let newOption = document.createElement('option');
                newOption.textContent = u.name;
                newOption.classList.add('selectItem');
                selectUni.append(newOption);
            });

        } else {
            newOptions(selectCity.value);
        }  
    });

    //NÄR ETT UNIVERSITET VÄLJS, VÄLJS OCKSÅ STADEN DET LIGGER I//
    selectUni.addEventListener('change', () => {
        if (selectUni.value === 'All universities') {
            selectCity.value === 'All destinations';


        } else {
            // Kolla i vilken stad det universitetet ligger
            let currentUni = selectUni.value;
            let cityID = UNIVERSITIES.find(u => u.name == currentUni).cityID;
            let uniLocation = CITIES.find(c => c.id == cityID).name;

            // Sätt den staden som vald i selectCity
            selectCity.value = uniLocation;
        }
    });

    //FUNKTION FÖR ATT SKAPA NYA ALVERNATIV I SELECTOR//
    function newOptions(aCityName){
        //hitta stadens id
        let cityID = CITIES.find(c => c.name === aCityName).id;
        
        //Hämta alla universitet som finns i den staden
        let newUniOptions = UNIVERSITIES.filter(u => u.cityID == cityID);

        //ta bort nuvarande options i university selector
        let currentUniOptions = document.querySelectorAll('#university > .selectItem');
        currentUniOptions.forEach(o => o.remove());

        //skapa nya options med det universitetet
        newUniOptions.forEach(u => {
            let newOption = document.createElement('option');
            newOption.textContent = u.name;
            newOption.classList.add('selectItem');

            selectUni.append(newOption);
        });

        let newOption = document.createElement('option');
        newOption.textContent = 'All universities';
        newOption.classList.add('selectItem');

        selectUni.append(newOption);
    }

    document.querySelector('.searchButton').addEventListener('click', () => {
        let city = selectCity.value;
        let uni = selectUni.value;
        let level = selectLevel.value;
        let field = selectField.value; 

        createProgrammes(city, uni, level, field);
    });

    let programmesWrapper = document.querySelector('.programmesWrapper');

    function createProgrammes(city, uni, level, field){
        let cityID = CITIES.find(c => c.name === city).id;
        let uniID = UNIVERSITIES.find(u => u.name === uni).id;
        let levelID = LEVELS.indexOf(level);
        let fieldID = FIELDS.find(f => f.name === field).id;

        let filteredProgrammes = PROGRAMMES.filter(prog => prog.universityID === uniID && prog.level === levelID && prog.subjectID === fieldID);

        console.log(filteredProgrammes);
        let programmeParent = document.createElement('div');
        programmeParent.classList.add('progParent');
        programmeParent.innerHTML = `
        <div class='progHeadning'></div>
        <div class='progUniversity'></div>
        <div class='progLevel'></div>
        <div class='progLanguage'></div>
        `;

        programmesWrapper.append(programmeParent);
    }

}


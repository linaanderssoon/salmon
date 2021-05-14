"use strict";

//SKAPAR WRAPPER FÖR DESTINATIONER OCH DESS INNEHÅLL
function goToProgrammes() {  
    scroll(0,0);

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
                <option id="selectItem" value='Alla destinationer'> Alla destinationer </option>
            </select>
            <div id="arrow"></div>
        </div>

        <div class="dropdown">
        <select name="" id="university">
            <option id="selectItem" value='Alla universitet'> Alla universitet </option>
        </select>
        <div id="arrow"></div>
        </div>

        <div class="dropdown">
        <select name="" id="level">
            <option id="selectItem" value='Alla nivåer'> Alla nivåer </option>
        </select>
        <div id="arrow"></div>
        </div>

        <div class="dropdown">
        <select name="" id="field">
            <option id="selectItem" value='Alla ämnen'> Alla ämnen </option>
        </select>
        <div id="arrow"></div>
        </div>

        <button class='searchButton'> Sök </button>
        <button class='resetButton'> Rensa </button>
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
        if (selectCity.value === 'Alla destinationer'){
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
        if (selectUni.value === 'Alla universitet') {
            selectCity.value === 'Alla destinationer';
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
    }

    let programmesWrapper = document.querySelector('.programmesWrapper');

    //9 PROGRAM VISAS FÅRN BÖRJAN NÄR MAN GÅR IN PÅ SIDAN//
    let counter = 9;
    for(let i = 0; i < counter; i++) {
        programmesWrapper.append(createProgDivs(PROGRAMMES[i]));
    }

    //VISA MED KNAPP FUNKTION//
    const showMore = document.querySelector('.showMore');
    showMore.addEventListener('click', () => {
        //Varje gång vi klickar på visa mer lägger vi till 9st i counter
        counter = counter + 9;

        programmesWrapper.innerHTML = '';
            
        for(let i = 0; i < counter; i++) {
            //om countern är uppe i maxantal så sluta skapa divvar och ta bort knappen 
            if (i >= PROGRAMMES.length){
                document.querySelector('.showMore').style.setProperty('display', 'none');
                break;
            };

            //Annars forstätt skapa divvar
            programmesWrapper.append(createProgDivs(PROGRAMMES[i]));
        }
    });


    //SÖKFUNKTION//
    document.querySelector('.searchButton').addEventListener('click', () => {
        programmesWrapper.innerHTML ='';
        
        let city = selectCity.value;
        let uni = selectUni.value;
        let level = selectLevel.value;
        let field = selectField.value; 

        createProgrammes(city, uni, level, field);
    });


    function createProgrammes(city, uni, level, field){
        if (city === 'Alla destinationer' && uni === 'Alla universitet' && level === 'Alla nivåer' && field === 'Alla ämnen') {
            for(let i = 0; i < counter; i++) {
                programmesWrapper.append(createProgDivs(PROGRAMMES[i]));
            }

        } else if (uni === 'Alla universitet' && level === 'Alla nivåer' && field === 'Alla ämnen') {
            let cityID = CITIES.find(c => c.name === city).id;

            let filtered = PROGRAMMES.filter(prog => UNIVERSITIES.find(u => u.id === prog.universityID).cityID === cityID);
            filtered.forEach(p => {
                programmesWrapper.append(createProgDivs(p));
            });

            underNine(filtered);
            noMatches(filtered);
        } else if (city === 'Alla destinationer' && uni === 'Alla universitet' && field === 'Alla ämnen') {
            let levelID = LEVELS.indexOf(level);

            let filtered = PROGRAMMES.filter(prog => prog.level === levelID);
            filtered.forEach(p => {
                programmesWrapper.append(createProgDivs(p));
            });

            underNine(filtered);
            noMatches(filtered);

        } else if (city === 'Alla destinationer' && uni === 'Alla universitet' && level === 'Alla nivåer') {
            let fieldID = FIELDS.find(f => f.name === field).id;

            let filtered = PROGRAMMES.filter(prog => prog.subjectID === fieldID);
            filtered.forEach(p => {
                programmesWrapper.append(createProgDivs(p));
            });

            underNine(filtered);
            noMatches(filtered);

        } else if (field === 'Alla ämnen' && level === 'Alla nivåer') {
            let uniID = UNIVERSITIES.find(u => u.name === uni).id;
            let cityID = CITIES.find(c => c.name === city).id;

            let filtered = PROGRAMMES.filter(prog => prog.universityID === uniID && UNIVERSITIES.find(u => u.id === prog.universityID).cityID === cityID);
            filtered.forEach(p => {
                programmesWrapper.append(createProgDivs(p));
            });

            underNine(filtered);
            noMatches(filtered);

        } else if (uni === 'Alla universitet' && level === 'Alla nivåer') {
            let fieldID = FIELDS.find(f => f.name === field).id;
            let cityID = CITIES.find(c => c.name === city).id;

            let filtered = PROGRAMMES.filter(prog => prog.subjectID === fieldID && UNIVERSITIES.find(u => u.id === prog.universityID).cityID === cityID);
            filtered.forEach(p => {
                programmesWrapper.append(createProgDivs(p));
            });

            underNine(filtered);
            noMatches(filtered);

        } else if (city === 'Alla destinationer' && uni === 'Alla universitet') {
            let fieldID = FIELDS.find(f => f.name === field).id;
            let levelID = LEVELS.indexOf(level);

            let filtered = PROGRAMMES.filter(prog => prog.subjectID === fieldID && prog.level === levelID);
            filtered.forEach(p => {
                programmesWrapper.append(createProgDivs(p));
            });

            underNine(filtered);
            noMatches(filtered);

        } else if(field === 'Alla ämnen') {
            let uniID = UNIVERSITIES.find(u => u.name === uni).id;
            let levelID = LEVELS.indexOf(level);

            let filtered = PROGRAMMES.filter(prog => prog.universityID === uniID && prog.level === levelID);
            filtered.forEach(p => {
                programmesWrapper.append(createProgDivs(p));
            });

            underNine(filtered);
            noMatches(filtered);

        } else if(level === 'Alla nivåer') {
            let fieldID = FIELDS.find(f => f.name === field).id;
            let uniID = UNIVERSITIES.find(u => u.name === uni).id;

            let filtered = PROGRAMMES.filter(prog => prog.universityID === uniID && prog.subjectID === fieldID);
            filtered.forEach(p => {
                programmesWrapper.append(createProgDivs(p));
            });

            underNine(filtered);
            noMatches(filtered)

        } else if(uni === 'Alla universitet') {
            let fieldID = FIELDS.find(f => f.name === field).id;
            let levelID = LEVELS.indexOf(level);
            let cityID = CITIES.find(c => c.name === city).id;

            let filtered = PROGRAMMES.filter(prog => prog.level === levelID && prog.subjectID === fieldID && UNIVERSITIES.find(u => u.id === prog.universityID).cityID === cityID);
            filtered.forEach(p => {
                programmesWrapper.append(createProgDivs(p));
            });

            underNine(filtered);
            noMatches(filtered)

        } else {
            let uniID = UNIVERSITIES.find(u => u.name === uni).id;
            let levelID = LEVELS.indexOf(level);
            let fieldID = FIELDS.find(f => f.name === field).id;

            let filtered = PROGRAMMES.filter(prog => prog.universityID === uniID && prog.level === levelID && prog.subjectID === fieldID);

            filtered.forEach(p => {    
            programmesWrapper.append(createProgDivs(p));
            });

            underNine(filtered);
            noMatches(filtered)
        }

        function underNine(filter) {
            if(filter.length <= 9) {
                document.querySelector('.showMore').style.setProperty('display', 'none');
            } else {
                document.querySelector('.showMore').style.setProperty('display', 'block');
            }
        }

        function noMatches(filter) {
            if(filter.length == 0) {
                let error = document.createElement('div');
                error.classList.add('error');
                error.textContent = 'Det finns tyvärr inga program som matchar din sökning :('
                programmesWrapper.append(error);
            } 
        }
    }

    function createProgDivs(p) {
        let programmeParent = document.createElement('div');
        programmeParent.classList.add('progParent');

        let uniName = UNIVERSITIES.find(u => u.id === p.universityID).name;
        let progLevel = LEVELS[p.level];
        let progLang = LANGUAGES.find(l => l.id === p.language).name;

        programmeParent.innerHTML = `
        <div class='progHeadning'> ${p.name}</div>

        <div class='infoParent'> 
        <div class='uniPic'></div>
        <div class='progUniversity'>${uniName}</div>
        </div>

        <div class='infoParent'> 
        <div class='levelPic'></div>
        <div class='progLevel'>${progLevel}</div>
        </div> 

        <div class='infoParent'> 
        <div class='langPic'></div>
        <div class='progLanguage'>${progLang}</div>
        </div> 
        `;

        programmeParent.addEventListener('click', (e) => {
            makeInfoDiv(p, uniName, progLevel, progLang);
            let infoDivDest = document.querySelector('.infoDivDest');
            console.log(e.clientY);
    
            let placementTop = e.clientY;
            console.log(e);
            infoDivDest.style.setProperty('top', `${placementTop}px`);
        });

        return programmeParent;
    }

    function makeInfoDiv(p, uniName, progLevel, progLang) {
        let infoDivDestParent = document.createElement('div');
        infoDivDestParent.classList.add('infoDivDestParent');
        document.body.append(infoDivDestParent);

        let bodyheight = getComputedStyle(document.body).getPropertyValue('height');
        infoDivDestParent.style.setProperty('height', bodyheight);

        let infoDivDest = document.createElement('div');
        infoDivDest.classList.add('infoDivDest');
        infoDivDest.innerHTML = `
        <div class='infoDivLeft'> 
            <h2> ${p.name} </h2>

            <div class ='infoDivLeftInner' > 
                <div class='innerIcon iconLocation'> </div>
                <h5> ${uniName} </h5>
            </div>

            <div class ='infoDivLeftInner' > 
                <div class='innerIcon iconLevel'> </div>
                <h5> Nivå: ${progLevel} </h5>
            </div>

            <div class ='infoDivLeftInner' > 
                <div class='innerIcon iconLanguage'> </div>
                <h5> Språk: ${progLang} </h5>
            </div>

            <div class ='infoDivLeftInner' > 
                <div class='innerIcon iconEntry'> </div>
                <h5> Intagningspoäng: ${p.entryGrades} </h5>
            </div>

            <div class ='infoDivLeftInner' > 
                <div class='innerIcon iconClass'> </div>
                <h5> Antal lokala studenter: ${p.localStudents} </h5>
            </div>

            <div class ='infoDivLeftInner' > 
                <div class='innerIcon iconInternationalStudents'> </div>
                <h5> Antal utbytesstudent: ${p.exchangeStudents} </h5>
            </div>
        </div>

        <div class='infoDivRight'> 
            <div class='scrollBox'> </div>
        </div>
        `;

        programmesWrapper.append(infoDivDest);

        let comments = COMMENTS_PROGRAMME.filter(c => c.programmeID === p.id)

        comments.forEach(c => {
            let commentParent = document.createElement('div');
            commentParent.classList.add('commentParent');

            let starsParent = document.createElement('div');
            starsParent.classList.add('starsParent');

            let starNumber = c.stars.courses;

            for (let i = 1; i <= starNumber; i++) {
                let star = document.createElement('div');
                star.classList.add('star');

                starsParent.append(star);

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

        return infoDivDestParent;
    }
}
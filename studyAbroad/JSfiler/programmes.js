"use strict";

//SKAPAR WRAPPER FÖR DESTINATIONER OCH DESS INNEHÅLL
function goToProgrammes(university) {  


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
                <option id="selectItem" value='-1'> Alla destinationer </option>
            </select>
            <div id="arrow"></div>
        </div>

        <div class="dropdown">
        <select name="" id="university">
            <option id="selectItem" value='-1'> Alla universitet </option>
        </select>
        <div id="arrow"></div>
        </div>

        <div class="dropdown">
        <select name="" id="level">
            <option id="selectItem" value='-1'> Alla nivåer </option>
        </select>
        <div id="arrow"></div>
        </div>

        <div class="dropdown">
        <select name="" id="field">
            <option id="selectItem" value='-1'> Alla ämnen </option>
        </select>
        <div id="arrow"></div>
        </div>

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

    // VARIABLER //
    const selectCity = document.getElementById('city');
    const selectUni = document.getElementById('university');
    const selectLevel = document.getElementById('level');
    const selectField = document.getElementById('field');
    const programmesWrapper = document.querySelector('.programmesWrapper');
    const showMore = document.querySelector('.showMore');
    let filtered = [...PROGRAMMES];
    let counter = 9;


    initialProgrammes();


    // SKAPAR ALLA OPTIONS //
    CITIES.forEach(c => {
        let newOption = document.createElement('option');
        newOption.textContent = c.name;
        newOption.value = c.id;
        newOption.classList.add('selectItem');
        selectCity.append(newOption);
    });

    UNIVERSITIES.forEach(u => {
        let newOption = document.createElement('option');
        newOption.textContent = u.name;
        newOption.value = u.id;
        newOption.classList.add('selectItem');
        selectUni.append(newOption);
    });
    
    LEVELS.forEach((l, index) => {
        let newOption = document.createElement('option');
        newOption.textContent = l;
        newOption.value = index;
        newOption.classList.add('selectItem');
        selectLevel.append(newOption);
    });
    
    FIELDS.forEach((f, index) => {
        let newOption = document.createElement('option');
        newOption.textContent = f.name;
        newOption.value = index;
        newOption.classList.add('selectItem');
        selectField.append(newOption);
    });

    // NÄR NÅGOT MARKERAS I DESTINATIONS UPPDETERAS UNIVERSITETVALEN //
    selectCity.addEventListener('change', () => {
        if (selectCity.value === '-1'){
            let currentUniOptions = document.querySelectorAll('#university > .selectItem');
            currentUniOptions.forEach(o => o.remove());

            UNIVERSITIES.forEach(u => {
                let newOption = document.createElement('option');
                newOption.textContent = u.name;
                newOption.value = u.id;
                newOption.classList.add('selectItem');
                selectUni.append(newOption);
            });

        } else {
            newOptions(selectCity.value);
        }  
    });

    //NÄR ETT UNIVERSITET VÄLJS, VÄLJS OCKSÅ STADEN DET LIGGER I //
    selectUni.addEventListener('change', () => {
        if (selectUni.value === '-1') {
            selectCity.value === '-1';
        } else {
            // Kolla i vilken stad det universitetet ligger
            let currentUni = selectUni.value;
            let cityID = UNIVERSITIES.find(u => u.id == currentUni).cityID;

            // Sätt den staden som vald i selectCity
            selectCity.value = cityID;
        }
    });

    //FUNKTION FÖR ATT SKAPA NYA ALVERNATIV I SELECTOR //
    function newOptions(aCityID){        
        //Hämta alla universitet som finns i den staden
        let newUniOptions = UNIVERSITIES.filter(u => u.cityID == aCityID);

        //ta bort nuvarande options i university selector
        let currentUniOptions = document.querySelectorAll('#university > .selectItem');
        currentUniOptions.forEach(o => o.remove());

        //skapa nya options med det universitetet
        newUniOptions.forEach(u => {
            let newOption = document.createElement('option');
            newOption.textContent = u.name;
            newOption.value = u.id;
            newOption.classList.add('selectItem');

            selectUni.append(newOption);
        });
    }

    // FUNKTION SOM SKAPAR DIVARNA SOM SKA VARA DÄR FRÅN START //
    function initialProgrammes() {

        if (university !== undefined) {
            selectUni.value = university;
            let event = new Event('change');
            selectUni.dispatchEvent(event);
        } 
    //9 PROGRAM VISAS FRÅN BÖRJAN NÄR MAN GÅR IN PÅ SIDAN//
        else  {
         for(let i = 0; i < counter; i++) {
            programmesWrapper.append(createProgDivs(PROGRAMMES[i]));
            }  
    }

    //SÖKFUNKTION//
    selectCity.addEventListener('change', () => {
        programmesWrapper.innerHTML ='';
        counter = 9;

        let cityID = selectCity.value; 
        let uniID = selectUni.value;
        let levelID = selectLevel.value;
        let fieldID = selectField.value; 

        createProgrammes(cityID, uniID, levelID, fieldID);
    });

    selectUni.addEventListener('change', () => {
        programmesWrapper.innerHTML ='';
        counter = 9;

        let cityID = selectCity.value; 
        let uniID = selectUni.value;
        let levelID = selectLevel.value;
        let fieldID = selectField.value; 

        createProgrammes(cityID, uniID, levelID, fieldID);
    });

    selectLevel.addEventListener('change', () => {
        programmesWrapper.innerHTML ='';
        counter = 9;

        let cityID = selectCity.value; 
        let uniID = selectUni.value;
        let levelID = selectLevel.value;
        let fieldID = selectField.value; 

        createProgrammes(cityID, uniID, levelID, fieldID);
    });

    selectField.addEventListener('change', () => {
        programmesWrapper.innerHTML ='';
        counter = 9;

        let cityID = selectCity.value; 
        let uniID = selectUni.value;
        let levelID = selectLevel.value;
        let fieldID = selectField.value; 

        createProgrammes(cityID, uniID, levelID, fieldID);
    });


    // FILTRERAR BASERAT PÅ SÖKNING //
    function createProgrammes(cityID, uniID, levelID, fieldID) {

        if(cityID !== "-1") {
            filtered = PROGRAMMES.filter(prog => {
                let temp_cityID = UNIVERSITIES.find(u => u.id === prog.universityID).cityID;
                // console.log(temp_cityID.toString(), cityID);

                return temp_cityID == cityID;
            });
        }

        if(uniID !== "-1") {
            filtered = PROGRAMMES.filter(prog => prog.universityID == uniID);
        }

        if(levelID !== "-1") {
            filtered = filtered.filter(prog => prog.level == levelID);
        }

        if(fieldID !== "-1") {
            filtered = filtered.filter(prog => prog.subjectID == fieldID);
        }

        for(let i = 0; i < counter; i++) {
            noMatches();
            underNine();

            programmesWrapper.append(createProgDivs(filtered[i]));
        }
    

        function noMatches() {
            if(filtered.length == 0) {
                let error = document.createElement('div');
                error.classList.add('error');
                error.textContent = 'Det finns tyvärr inga program som matchar din sökning :('
                programmesWrapper.append(error);
            } 
        }

        function underNine() {
            if(filtered.length <= 9) {
                document.querySelector('.showMore').style.setProperty('display', 'none');
            }
        }
    }

     //VISA MED KNAPP FUNKTION //
     showMore.addEventListener('click', () => {
        if(selectCity === "-1" && selectUni === "-1" && selectLevel === "-1" && selectField === "-1") {
            //Varje gång vi klickar på visa mer lägger vi till 9st i counter
            counter = counter + 9;
            console.log(counter);

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
            
        } else {
            counter = counter + 9;
            console.log(counter);

            programmesWrapper.innerHTML = '';
                
            for(let i = 0; i < counter; i++) {
                //om countern är uppe i maxantal så sluta skapa divvar och ta bort knappen 
                if (i >= filtered.length){
                    document.querySelector('.showMore').style.setProperty('display', 'none');
                    break;
                };
    
                //Annars forstätt skapa divvar
                programmesWrapper.append(createProgDivs(filtered[i]));
            }
        }

    });

    // SKAPAR SMÅ PORGRAM DIVVARNA //
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
    
            let placementTop = e.currentTarget.offsetTop;
            infoDivDest.style.setProperty('top', `calc(${placementTop}px - 50px)`);

        });

        return programmeParent;
    }

    // SKAPAR STORA INFORMATIONS DIVAR //
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
                <h5> Intagningspoäng: <br>
                    <div class='entryPointsYear'>
                        <div> <span> 2016: </span>  ${p.entryGrades[0]} </div>
                        <div> <span> 2017: </span>  ${p.entryGrades[1]}  </div>
                        <div> <span> 2018: </span>  ${p.entryGrades[2]}  </div>
                        <div> <span> 2019: </span>  ${p.entryGrades[3]} </div>
                        <div> <span> 2020: </span>  ${p.entryGrades[4]} </div> 
                    </div>
                </h5>
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

            
            let starNumber = c.stars.courses;

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
}
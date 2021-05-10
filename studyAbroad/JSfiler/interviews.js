'use strict';


function goToInterviews() {
    navInterviews.classList.add('currentPage');

    navHome.classList.remove('currentPage');
    navDestinations.classList.remove('currentPage');
    navProgrammes.classList.remove('currentPage');

 
    wrapper.innerHTML = '';

    wrapper.innerHTML = `
    <h1> Intervjuer </h1>
    <div class='interviewHeroImage' > </div>
    <p class='interviewText'> Här kan du läsa intervjuer med studenter som åkt på utbytesår/termin tidigare år </p>

    <div class='longAd' > </div>

    <div class='interviewParent'> 
        <div class='interviewee'>
            <div class='intwOneImg'> </div>
            <p class='intwInfo'> 
            <span> Carola Sanchéz, 24 år.</span>
             Toulouse 2018
            </p>
        </div>

        <p class='intwText'>
        <span> Vad fick dig att ta beslutet att åka på utbytestermin/år? </span> <br>
        "Jag kommer från en familj där både mina föräldrar och mina äldre syskon har studerat utomlands, och det inspirerade mig så himla mycket att göra detsamma. Jag hade dock ingen aning om vart jag ville åka eller vad jag ville studera, det tog sin lilla tid innan jag visste. Det känns så himla befriande och äventyrligt att resa helt själv till ett främmande land och studera där." <br>
        <br>
        <span> Vad var det bästa med ditt utbyte? </span> <br>
        "Människorna! Det var så himla häftigt att träffa människor från alla världens hörn. Jag älskar att lära mig nya saker om olika kulturer och det kan man lugnt påstå att jag gjorde under mitt utbyte." <br>
        <br>
        <span> Hur fick du först intresse för att studera utomlands? </span> <br>
        "Som jag nämnde tidigare så har jag vuxit upp i en familj där alla har studerat utomlands och det har nästan varit en självklarhet att jag också ska göra det." <br>
        <br>
        <span> Vad såg du mest fram emot med ditt utbytestermin/år. </span> <br>
        "Jag såg fram emot så himla mycket, men om jag bara ska välja en sak så var det nog att träffa mina klasskamrater! Man har utan tvekan mycket gemensamt med allihopa! Alla är minst lika taggade, öppensinnade och snälla som en själv! Jag skulle nog vilja påstå att det är garanterat att man får vänner för livet." <br>
        <br>
        <span> Vad skulle du ge för tips till alla där ute som funderar på att studera utomlands? </span> <br>
        "Gör det, ni kommer inte att ångra er! Det är definitivt viktigt att vara välinformerad innan man gör beslutet dock eftersom det ändå är ett stort steg, därför kan jag verkligen rekommendera [namnet på vår hemsida] som hjälpte mig hitta den perfekta skolan!" <br>
        <br>
        <span>Hur hittade du [namnet på vår hemsida]? </span> <br>
        "Alla jag känner använder er hemsida! Den är lättnavigerad, snygg layout, väldigt informativ och har en fantastisk kundservice som hjälper en med alla frågor man kan ha!" <br>
        </p>
    </div>

    <div class='interviewParent'> 
        <p class='intwText'>
        <span> Vad fick dig att ta beslutet att åka på utbytestermin/år? </span> <br>
        “Jag hade hittat program som verkligen passade mig och min utbildning, men jag var fortfarande tveksam. Det känns så himla stort att åka utomlands själv under en så lång tid. Jag fick bara försöka tänka bort det och tänka att det här är något som är bra för mig. Dessutom hade alla andra innan mig klarat det så varför skulle det inte gå bra för mig?” <br>
        <br>
        <span> Vad var det bästa med ditt utbyte? </span> <br>
        “Alla nya kontakter och vänner jag har skapat. Det kommer jag ha nytta av både när jag väl kommer ut i arbetslivet, men även vänner jag kommer ha för livet!” <br>
        <br>
        <span> Hur fick du först intresse för att studera utomlands? </span> <br>
        “Jag hade hört flera personer som åkt på utbytestermin som var jättenöjda och hade haft väldigt en både rolig och lärorik tid. “ <br>
        <br>
        <span> Vad såg du mest fram emot med ditt utbytestermin/år. </span> <br>
        “För mig var det viktigt att det var ett bra program som skulle vara givande för min utbildning, så jag såg mest fram emot att jag skulle få lära mig.” <br>
        <br>
        <span> Vad skulle du ge för tips till alla där ute som funderar på att studera utomlands? </span> <br>
        “Att våga ta steget definitivt! Jag tyckte det kändes läskigt och stort men jag vet att om jag inte hade åkt så hade jag ångrat det i framtiden… så våga!” <br>
        <br>
        <span> Hur hittade du [namnet på vår hemsida]? </span> <br>
        “När jag väl hade hittat ett program jag var intresserad av läste jag massor på nätet och kollade på youtubevideos för att ta reda på mer information och bli peppad. Tror det var någon i en youtube video som pratade om sidan.” <br>
        </p>

        <div class='interviewee' >
        <div class='intwTwoImg'> </div>
        <p class='intwInfo'> 
        <span> Mattias Ström, 27 år.</span>
         Paris 2016
        </p>
    </div>
    </div>

    <div class='interviewParent'> 
        <div class='interviewee'>
            <div class='intwThreeImg'> </div>
            <p class='intwInfo'> 
            <span> Lovisa Karlsson, 22 år. </span>
             London 2019
            </p>
        </div>

        <p class='intwText'>
        <span> Vad fick dig att ta beslutet att åka på utbytestermin/år? </span> <br>
        “Jag var osäker till en början då jag hade dålig koll på var man kunde åka och vad man kunde läsa om, men jag har alltid lockats lite av att testa att bo i ett annat land än Sverige. När jag fick tips om att kolla in den här hemsidan och fann hjälpande information så bestämde jag mig för att ge det ett försök.” <br>
        <br>
        <span> Vad var det bästa med ditt utbyte? </span> <br>
        “Att jag känner mig stolt över mig själv att jag vågade, jag har växt så otroligt mycket som person under detta utbyte och har inte ångrat det en sekund.” <br>
        <br>
        <span> Hur fick du först intresse för att studera utomlands? </span> <br>
        “Jag har alltid tyckt om att resa och upptäcka kulturer och ibland velat stanna under en längre period. När jag började leta studier så kom jag på att det faktiskt är ett perfekt tillfälle att testa på livet i ett annat land än Sverige, och så väcktes intresset.” <br>
        <br>
        <span> Vad såg du mest fram emot med ditt utbytestermin/år? </span> <br>
        “Jag såg väl egentligen mest fram emot hela erfarenheten av att bo utomlands. Att lära känna helt nya människor, miljöer och kulturer.” <br>
        <br>
        <span> Vad skulle du ge för tips till alla där ute som funderar på att studera utomlands? </span> <br>
        “Det är inte så svårt och läskigt som man kan tro så kolla upp bra information, läs på, och våga bestämma dig!” <br>
        <br>
        <span> Hur hittade du [namnet på vår hemsida]? </span> <br>
        “När jag sa till min vän att utlandsstudier låter intressant men att jag var osäker på var man kunde åka och om det var för krångligt så rekommenderade hon er hemsida för användbar information :)” <br>

        </p>
    </div>

    <div class='boxAd' > </div>

    <div class='longAd' > </div>
    `;    
}
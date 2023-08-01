// @charset "UTF-8";
// @ts-ignore
// @ts-nocheck
// @mime-type text/javascript

// 0.0 - VARIABLES
var language = "ES";    // ES || EN
var site = "Home";      // Home || Contact
var webVersion = 'PC';  // PC || Mobile 

//// Used to switch language functionalities in order to current url
var lauglitchButton = document.getElementById('lauglitchButton');
var spanishButton = document.getElementById('spanishButton');
var englishButton = document.getElementById('englishButton');
var contactButton = document.getElementById('contactButton');
let lauglitchBFunc = function() {};
let spanishBFunc = function() {};
let englishBFunc = function() {};
let contactBFunc = function() {};

//// Used to show or hide web elements
var bodyHome = document.getElementById('bodyHome');
var bodyContact = document.getElementById('bodyContact');
var spanishBio = document.getElementById('spanishBio');
var englishBio = document.getElementById('englishBio');
var spanishContactTitle = document.getElementById('spanishContactTitle');
var englishContactTitle = document.getElementById('englishContactTitle');
var spanishForm = document.getElementById('spanishForm');
var englishForm = document.getElementById('englishForm');
var spanishFindOnText = document.getElementById('spanishFindOnText');
var englishFindOnText = document.getElementById('englishFindOnText');
const webElements = [
    { htmlElem: bodyHome, lang: 'ALL', site: 'Home' },
    { htmlElem: bodyContact, lang: 'ALL', site: 'Contact' },
    { htmlElem: spanishBio, lang: 'ES', site: 'Home' },
    { htmlElem: englishBio, lang: 'EN', site: 'Home' },
    { htmlElem: spanishContactTitle, lang: 'ES', site: 'Contact' },
    { htmlElem: englishContactTitle, lang: 'EN', site: 'Contact' },
    { htmlElem: spanishForm, lang: 'ES', site: 'Contact' },
    { htmlElem: englishForm, lang: 'EN', site: 'Contact' },
    { htmlElem: spanishFindOnText, lang: 'ES', site: 'Contact' },
    { htmlElem: englishFindOnText, lang: 'EN', site: 'Contact' },
]

// 0.1 - VARIABLE EVENTS
lauglitchButton.addEventListener("click", function () {
    console.log("lauglitchButton clicked");
    lauglitchBFunc();
    toggleContentBasedOnURL2();
});
lauglitchButton.addEventListener('mouseenter', onMouseEnter(lauglitchButton));
lauglitchButton.addEventListener('mouseleave', onMouseLeave(lauglitchButton));

spanishButton.addEventListener("click", function () {
    console.log("spanishButton clicked");
    spanishBFunc();
    toggleContentBasedOnURL2();
});
spanishButton.addEventListener('mouseenter', onMouseEnter(spanishButton));
spanishButton.addEventListener('mouseleave', onMouseLeave(spanishButton));

englishButton.addEventListener("click", function () {
    console.log("englishButton clicked");
    englishBFunc();
    toggleContentBasedOnURL2();
});
englishButton.addEventListener('mouseenter', onMouseEnter(englishButton));
englishButton.addEventListener('mouseleave', onMouseLeave(englishButton));

contactButton.addEventListener("click", function () {
    console.log("contactButton clicked");
    contactBFunc();
    toggleContentBasedOnURL2();
});
contactButton.addEventListener('mouseenter', onMouseEnter(contactButton));
contactButton.addEventListener('mouseleave', onMouseLeave(contactButton));

///////////// 1 - GETTERS AND SETTERS
function setLanguage(lang) {
    language = lang;
}
function getLanguage() {
    return language;
}
function setSite(sit) {
    site = sit;
}
function getSite() {
    return site;
}
function setWebVersion(wVersion) {
    webVersion = wVersion;
}
function getWebVersion() {
    return webVersion;
}
function getDomain(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}

///////////// 2 - INSTRUCTIONS
console.log("V1.129");                          // Debug version

toggleContentBasedOnURL2();                      // Called on first page load

///////////// 3 - NAVIGATION
function redirectToHomeES() {
    window.location.href = "https://www.lauglitch.com/";
    console.log("Navigate to ES-Home");
}
function redirectToHomeEN() {
    window.location.href = "https://www.lauglitch.com/p/home.html";
    console.log("Navigate to EN-Home");
}
function redirectToContactES() {
    window.location.href = "https://www.lauglitch.com/p/contacto.html";
    console.log("Navigate to ES-Contact");
}
function redirectToContactEN() {
    window.location.href = "https://www.lauglitch.com/p/contact.html";
    console.log("Navigate to EN-Contact");
}

///////////// 4 - GRAPHICS
// Called after navigation methods. Check current URL and set its content
function toggleContentBasedOnURL() {        
    var currentURL = window.location.href;
    const imageLauglitch = lauglitchButton.querySelector('img');
    const imageSpanish = spanishButton.querySelector('img');
    const imageEnglish = englishButton.querySelector('img');
    const imageContact = contactButton.querySelector('img');

    if (currentURL === "https://www.lauglitch.com/") {
        setLanguage('ES');
        setSite('Home');
        setWebVersion('PC');
        
        lauglitchButton.style.removeProperty('filter');
        imageLauglitch.style.removeProperty('filter');

        // BODY
        document.getElementById('bodyHome').style.display = 'block';

        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/home.html') {
        setLanguage('EN');
        setSite('Home');
        setWebVersion('PC');

        imageLauglitch.classList.remove('hover-effect');

        // BODY
        document.getElementById('bodyHome').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto.html') {
        setLanguage('ES');
        setSite('Contact');
        setWebVersion('PC');

        imageLauglitch.classList.add('hover-effect');

        // BODY
        document.getElementById('bodyContacto').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contact.html') {
        setLanguage('EN');
        setSite('Contact');
        setWebVersion('PC');

        imageLauglitch.classList.add('hover-effect');

        // BODY
        document.getElementById('bodyContact').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
    } 
   // MOBILE VERSION
    else if (currentURL === "https://www.lauglitch.com/?m=1") {
        setLanguage('ES');
        setSite('Home');
        setWebVersion('Mobile');

        // BODY
        document.getElementById('bodyInicio').style.display = 'block';

        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/home.html?m=1') {
        setLanguage('EN');
        setSite('Home');
        setWebVersion('Mobile');

        // BODY
        document.getElementById('bodyHome').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto.html?m=1') {
        setLanguage('ES');
        setSite('Contact');
        setWebVersion('Mobile');

        // BODY
        document.getElementById('bodyContacto').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contact.html?m=1') {
        setLanguage('EN');
        setSite('Contact');
        setWebVersion('Mobile');

        // BODY
        document.getElementById('bodyContact').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
    } else {
        console.log("No existe esta página.");
    }
    switchKeypadButtons();
}
function setDisplay(){
    const toShow = [];
    const toHide = [];
    let lang = getLanguage();
    let site = getSite();

    webElements.forEach((elem) => {
        // ES-Home
        if (elem.lang === lang && elem.site === site) {
            toShow.push(elem.htmlElem);
        } else if (elem.lang === 'ALL' && elem.site === site){
            toShow.push(elem.htmlElem);
        }
        else {
            toHide.push(elem.htmlElem);
        }
    });

    toShow.forEach((elem) => {
        elem.style.display = 'block';
    });
    toHide.forEach((elem) => {
        elem.style.display = 'none';
    });
}
function toggleContentBasedOnURL2() {        
    var currentURL = window.location.href;
    const imageLauglitch = lauglitchButton.querySelector('img');
    const imageSpanish = spanishButton.querySelector('img');
    const imageEnglish = englishButton.querySelector('img');
    const imageContact = contactButton.querySelector('img');

    if (currentURL === "https://www.lauglitch.com/") {
        setLanguage('ES');
        setSite('Home');
        setWebVersion('PC');
        
        //lauglitchButton.style.removeProperty('filter');
        //imageLauglitch.style.removeProperty('filter');
    } else if (currentURL === 'https://www.lauglitch.com/p/home.html') {
        setLanguage('EN');
        setSite('Home');
        setWebVersion('PC');

        //imageLauglitch.classList.remove('hover-effect');
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto.html') {
        setLanguage('ES');
        setSite('Contact');
        setWebVersion('PC');

        //imageLauglitch.classList.add('hover-effect');
    } else if (currentURL === 'https://www.lauglitch.com/p/contact.html') {
        setLanguage('EN');
        setSite('Contact');
        setWebVersion('PC');

        //imageLauglitch.classList.add('hover-effect');
    } 
   // MOBILE VERSION
    else if (currentURL === "https://www.lauglitch.com/?m=1") {
        setLanguage('ES');
        setSite('Home');
        setWebVersion('Mobile');
    } else if (currentURL === 'https://www.lauglitch.com/p/home.html?m=1') {
        setLanguage('EN');
        setSite('Home');
        setWebVersion('Mobile');
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto.html?m=1') {
        setLanguage('ES');
        setSite('Contact');
        setWebVersion('Mobile');
    } else if (currentURL === 'https://www.lauglitch.com/p/contact.html?m=1') {
        setLanguage('EN');
        setSite('Contact');
        setWebVersion('Mobile');
    } else {
        console.log("No existe esta página.");
    }
    setDisplay()
    switchKeypadButtons();
}

function switchKeypadButtons(){
    console.log("switchKeypadButtons() --> url: " + window.location.href + " / Lang: " + getLanguage() + " / Site: " + getSite());
    if (getLanguage() === 'ES' & getSite() === 'Home'){
        removeInteraction(lauglitchButton);
        removeInteraction(spanishButton);

        addInteraction(englishButton);
        addInteraction(contactButton);
        englishBFunc = redirectToHomeEN;
        contactBFunc = redirectToContactES;
    } else if (getLanguage() === 'EN' & getSite() === 'Home'){
        removeInteraction(lauglitchButton);
        removeInteraction(englishButton);

        addInteraction(spanishButton);
        addInteraction(contactButton);
        spanishBFunc = redirectToHomeES;
        contactBFunc = redirectToContactEN;
    } else if (getLanguage() === 'ES' & getSite() === 'Contact'){
        removeInteraction(spanishButton);
        removeInteraction(contactButton);

        addInteraction(lauglitchButton);
        addInteraction(englishButton);
        lauglitchBFunc = redirectToHomeES;
        englishBFunc = redirectToContactEN;
    } else if (getLanguage() === 'EN' & getSite() === 'Contact') {
        removeInteraction(englishButton);
        removeInteraction(contactButton);

        addInteraction(lauglitchButton);
        addInteraction(spanishButton);
        lauglitchBFunc = redirectToHomeEN;
        spanishBFunc = redirectToContactES;
    } else {
        console.log('Variables de localización no identificadas.')
    }
}

// Remove from parameter button every Event Listener
function removeInteraction(buttonToNotInteract){

    buttonToNotInteract.disabled = true;
    buttonToNotInteract.removeEventListener('click', function(){}); 
    buttonToNotInteract.removeEventListener('mouseenter', function(){});
    buttonToNotInteract.removeEventListener('mouseleave', function(){});
}
// Add to parameter button Event Listeners with empty functions 
function addInteraction(buttonToInteract){

    buttonToInteract.disabled = false;
    buttonToInteract.addEventListener('mouseenter', onMouseEnter(buttonToInteract));
    buttonToInteract.addEventListener('mouseleave', onMouseLeave(buttonToInteract));
}
function onMouseEnter(b1) {
    b1.style.backgroundColor = 'blue';
    b1.style.color = 'white';
}
function onMouseLeave(b2) {
    b2.style.backgroundColor = '';
    b2.style.color = '';
}
///////////// END /////////////

// @charset "UTF-8";
// @ts-ignore
// @ts-nocheck
// @mime-type text/javascript

// 0- VARIABLES
var language = "ES";    // ES || EN
var site = "Home";      // Home || Contact
var webVersion = 'PC';  // PC || Mobile 

var lauglitchButton = document.getElementById('lauglitchButton');
var spanishButton = document.getElementById('spanishButton');
var englishButton = document.getElementById('englishButton');
var contactButton = document.getElementById('contactButton');
let lauglitchBFunc = function() {};
let spanishBFunc = function() {};
let englishBFunc = function() {};
let contactBFunc = function() {};

lauglitchButton.addEventListener("click", function () {
    console.log("lauglitchButton clicked");
    lauglitchBFunc();
    toggleContentBasedOnURL();
});
lauglitchButton.addEventListener('mouseenter', onMouseEnter(lauglitchButton));
lauglitchButton.addEventListener('mouseleave', onMouseLeave(lauglitchButton));

spanishButton.addEventListener("click", function () {
    console.log("spanishButton clicked");
    spanishBFunc();
    toggleContentBasedOnURL();
});
spanishButton.addEventListener('mouseenter', onMouseEnter(spanishButton));
spanishButton.addEventListener('mouseleave', onMouseLeave(spanishButton));

englishButton.addEventListener("click", function () {
    console.log("englishButton clicked");
    englishBFunc();
    toggleContentBasedOnURL();
});
englishButton.addEventListener('mouseenter', onMouseEnter(englishButton));
englishButton.addEventListener('mouseleave', onMouseLeave(englishButton));

contactButton.addEventListener("click", function () {
    console.log("contactButton clicked");
    contactBFunc();
    toggleContentBasedOnURL();
});
contactButton.addEventListener('mouseenter', onMouseEnter(contactButton));
contactButton.addEventListener('mouseleave', onMouseLeave(contactButton));

///////////// 1- INSTRUCTIONS
console.log("V1.117");                          // Debug version

toggleContentBasedOnURL();                      // Called on first page load

///////////// 2- GETTERS AND SETTERS
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

///////////// 3- NAVIGATION
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

///////////// 4- GRAPHICS
function toggleContentBasedOnURL() {        // Called after navigation methods. Check current URL and set its content
    var currentURL = window.location.href;
    console.log("toggleContentBasedOnURL() --> url: " + window.location.href + " / Lang: " + getLanguage() + " / Site: " + getSite());

    if (currentURL === "https://www.lauglitch.com/") {
        setLanguage('ES');
        setSite('Home');
        setWebVersion('PC');

        // BODY
        document.getElementById('bodyInicio').style.display = 'block';

        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/home.html') {
        setLanguage('EN');
        setSite('Home');
        setWebVersion('PC');

        // BODY
        document.getElementById('bodyHome').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyContacto').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contacto.html') {
        setLanguage('ES');
        setSite('Contact');
        setWebVersion('PC');

        // BODY
        document.getElementById('bodyContacto').style.display = 'block';

        document.getElementById('bodyInicio').style.display = 'none';
        document.getElementById('bodyHome').style.display = 'none';
        document.getElementById('bodyContact').style.display = 'none';
    } else if (currentURL === 'https://www.lauglitch.com/p/contact.html') {
        setLanguage('EN');
        setSite('Contact');
        setWebVersion('PC');

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

function switchKeypadButtons(){
    console.log("switchKeypadButtons() --> url: " + window.location.href + " / Lang: " + getLanguage() + " / Site: " + getSite());
    if (getLanguage() === 'ES' & getSite() === 'Home'){
        lauglitchButton.disabled = true;
        spanishButton.disabled = true;  // true === doesnt work ; false === works
        lauglitchButton = function() {};
        spanishButton = function() {};

        englishButton.disabled = false;
        contactButton.disabled = false; 
        englishBFunc = redirectToHomeEN;
        contactBFunc = redirectToContactES;
    } else if (getLanguage() === 'EN' & getSite() === 'Home'){
        lauglitchButton.disabled = true;  
        englishButton.disabled = true;
        lauglitchButton = function() {};
        englishButton = function() {};

        spanishButton.disabled = false;
        contactButton.disabled = false;
        spanishBFunc = redirectToHomeES;
        contactBFunc = redirectToContactEN;
    } else if (getLanguage() === 'ES' & getSite() === 'Contact'){
        spanishButton.disabled = true;
        contactButton.disabled = true;
        spanishButton = function() {};
        contactButton = function() {};

        lauglitchButton.disabled = false;
        englishButton.disabled = false;
        lauglitchBFunc = redirectToHomeES;
        englishBFunc = redirectToContactEN;
    } else if (getLanguage() === 'EN' & getSite() === 'Contact') {
        englishButton.disabled = true;
        contactButton.disabled = true;
        englishButton = function() {};
        contactButton = function() {};
        
        lauglitchButton.disabled = false;
        spanishButton.disabled = false;
        lauglitchBFunc = redirectToHomeEN;
        spanishBFunc = redirectToContactES;
    } else {
        console.log('Variables de localización no identificadas.')
    }

}

function onMouseEnter(b) {
    b.style.backgroundColor = 'blue';
    b.style.color = 'white';
}
  
function onMouseLeave(b) {
    b.style.backgroundColor = '';
    b.style.color = '';
}

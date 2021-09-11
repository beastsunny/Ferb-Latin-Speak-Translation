var txtInput = document.querySelector("#txtInput");
var btnTranslate = document.querySelector("#btnTranslate");
var divOutput = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json";


function getTranslationUrl(text) {
    return serverUrl + "?text=" + text;
}









btnTranslate.addEventListener("click", clickHandlerofTranslate);
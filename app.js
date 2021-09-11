var txtInput = document.querySelector("#txtInput");
var btnTranslate = document.querySelector("#btnTranslate");
var divOutput = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json";


function getTranslationUrl(text) {
    return serverUrl + "?text=" + text;
}

function clickHandlerOfTranslate() {


    var inputValue = txtInput.value;




    fetch(getTranslationUrl(inputValue))
        .then(Response => Response.json())
        .then(json => divOutput.textContent = json.contents.translated);
};











btnTranslate.addEventListener("click", clickHandlerofTranslate);
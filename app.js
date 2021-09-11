var txtInput = document.querySelector("#txtInput");
var btnTranslate = document.querySelector("#btnTranslate");
var divOutput = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json";


function getTranslationUrl(text) {
    return serverUrl + "?text=" + text;
}



function errorHandler(error) {
    console.log(error);
    alert("Something is wrong with the server! Please try after sometime");
}

function clickHandlerOfTranslate() {

    var inputValue = txtInput.value;

    fetch(getTranslationUrl(inputValue))
        .then(Response => Response.json())
        .then(json => divOutput.textContent = json.contents.translated).catch(errorHandler);
}



btnTranslate.addEventListener("click", clickHandlerofTranslate);
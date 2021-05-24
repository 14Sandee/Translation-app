var btn = document.querySelector("#btn-element");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedURL(text){
    return serverURL + "?text=" + text;
}

function errorHandling(error){
    alert("Something went wrong, Please try again later");
}
function clickedHandler(){
    var inputText = txtInput.value;

    fetch(getTranslatedURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandling)

};

btn.addEventListener("click", clickedHandler)

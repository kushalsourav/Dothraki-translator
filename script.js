var btnTranslator = document.querySelector('#btn-translator');
var textInput = document.querySelector('#textinput')
var output = document.querySelector('#output');



var serverUrl = "https://api.funtranslations.com/translate/dothraki.json";


function getTranslator(input) {
    return serverUrl + "?" + "text=" + input
}

function errorHandler(err) {
    console.log("Error Occured :", err);
}

function clickHandler() {
    var inputText = textInput.value;
    fetch(getTranslator(inputText))
        .then(response => response.json())
        .then(json => {
            // here at json we can provide any name - abc etc//
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler);

}


btnTranslator.addEventListener('click', clickHandler)
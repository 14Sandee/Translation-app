var btn = document.querySelector("#btn-element");
var txtInput = document.querySelector("#text-input");



btn.addEventListener("click", function clickedHandler() {
    console.log("clicked");
    console.log("input:", txtInput.value);
})
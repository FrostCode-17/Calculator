let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector(".screen");

//
function buttonClick(value) {
 if(isNaN(parseInt(value))) {
    handleSymbol(value);
 }
 else {
    handleNumber(value)
 };
}

function handleNumber(value) {

}

function handleSymbol(value) {

}




//Inialazing calc button
function init() {
    document.querySelector(".calc-buttons")
    .addEventListener("click", function(event) {
        buttonClick(event.target.innerText); 
    });
}

//Calling function init();
init();
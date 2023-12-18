let runningTotal = 0;
let buffer = "0";//screen
let previousOperator;
const screen = document.querySelector(".screen");

//
function buttonClick(value) {
 if(isNaN(parseInt(value))) {
    handleSymbol(value);
 }
 else {
    handleNumber(value);
 }
 rerender();
}

function handleNumber(number) {
    /*console.log('number');*/
    if(buffer ===  "0") {
        buffer = number;
    }else{
        buffer += number;//buffer = buffer +  number;
    /*console.log(buffer);*/ 
    }
}

function handleSymbol(symbol) {
    /*console.log('symbol');*/
    switch (symbol) {
        case "C":
            buffer = "0";
            break;
    }
}

 


//Inialazing all calculator buttons to have a eventListener
function init() {
    document.querySelector(".calc-buttons")
    .addEventListener("click", function(event) {
        buttonClick(event.target.innerText); 
    });
}

function rerender() {
    screen.innerText = buffer;
}

//Calling function init();
init();
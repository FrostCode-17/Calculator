let runningTotal = 0;
let buffer = "0";//screen
let previousOperator = null;
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

/*If buffer is straight up 0, and if math symols are pressed 0 is sill returned*/
function handleMath(value) {
    if(buffer === "0") {
        //Do nothing
        return;
    }

    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = value;
    buffer = "0";
    /*console.log(runningTotal);*/
}

function flushOperation(intBuffer) {
         if(previousOperator === "+") {
            runningTotal += intBuffer
         }
         else if (previousOperator === "-") {
            runningTotal -= intBuffer
         } else if(previousOperator === "×") {
            runningTotal *= intBuffer
         }
         else if(previousOperator === "÷") {
            runningTotal /= intBuffer
         }   
    }
   


function handleSymbol(symbol) {
    /*console.log('symbol');*/
    switch (symbol) {
        case "C":
            buffer = "0";
            runningTotal = 0;
            break;

        case "=":
            if(previousOperator === null) {
                /*need two numbers to do math*/
                return;
            }

            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = " " + runningTotal;
            runningTotal = 0;
            break;

        case "←":
        if (buffer.length === 1) {
            buffer = "0";
        } else {
            buffer = buffer.substring(0, buffer.length - 1)
        }
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(symbol);
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
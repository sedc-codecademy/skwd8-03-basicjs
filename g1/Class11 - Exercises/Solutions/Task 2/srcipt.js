// Part 1
// Write a function that will give stats about an integer number.

// function getNumberStats(number){
//     // your code here
// }
// The function should return an object with the stats as properties. The stats required are:

// Whats the value of the number (value property)
// How many digits the number has (numDigits property)
// Is the number odd or even (isEven property)
// Is the number positive (isPositive property)
// Part 2
// Write user interface for the number checker.
// It should include an entry field for the number as well as a button to trigger the calculation. After the calculation, and appropriate response should be shown on the page.

// I.e. if the user enters the number 25, the response should be

// The number 25 is a 2 digit number, it's odd and it's a positive number.


function NumberProperties(value, length, isEven, isPositive) {
    this.value = value;
    this.numDigits = length;
    this.isEven = isEven;
    this.isPositive = isPositive;

    this.printNumberProps = function () {
        return `The number ${this.value} is a ${this.numDigits} digit number, it's ${this.isEven ? 'even' : 'odd'} and it's a ${this.isPositive ? 'positive' : "negative"} number.`;
    }
}

function checkIfInputIsNumber(number) {
    return typeof (number) === 'number' && !isNaN(number);
}

function isNumberPositive(number) {
    return number >= 0; 
}

function numberDigits(number) {
    return Math.abs(number).toString().length;
}

function isNumberEven(number) {
    return number % 2 === 0;
}

function numberChecker(number) {

    if (!checkIfInputIsNumber(number)) {
        return null;
    }

    let isEven = isNumberEven(number);
    let isPositive = isNumberPositive(number);
    let numberLength = numberDigits(number);

    let numberObj = new NumberProperties(number, numberLength, isEven, isPositive);
    return numberObj;
}

let headline = document.getElementById("headline");

document
    .getElementById("checkMe")
    .addEventListener("click", function () {
        let inputValue = parseInt(document.getElementById("inputNumber").value);
        let numberProps = numberChecker(inputValue);
        
        if (numberProps === null) {
            headline.innerText = "Enter Valid Number";
        }
        else {
            headline.innerText = numberProps.printNumberProps();
        }
})
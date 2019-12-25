// Checking if script is connected
console.log("My script is working :)");
// FUNCTIONS
// Function definitions ( declaring functions, we do not call them, nothing happens on our page when we declare a function )
function writeInConsole(text){ // function with one parameter
    console.log(text); // there is no return. This returns undefined
}
function sumNumbers(number1, number2){ // function with two arguments
    if(number1 > 0 && number2 > 0){
        return number1 + number2; // returns result and goes out of the function
    } else {
        return null;
    }
}

// Calling functions ( functions are executed when called only )
var myResult = sumNumbers(3, 5); // calling function adding 3 to the first argument and 5 to the second and adding the return of the function in to a variable
var logic = myResult + 5; // We can operate with the return of the function as a number ( if we know the function returns a number )
console.log(myResult); // We can log the result in the console
console.log("The result is " + sumNumbers(3, 5)); // We can log a result from a function directly in the console log by calling the function in the console.log directly

// Exercise 1 functions definitions
function sumTwoNumbers(number1, number2){
    // var result = number1 + number2;
    // return result;
    return number1 + number2;
}
function subtractTwoNumbers(number1, number2){
    return number1 - number2;
}
function multiplyTwoNumbers(number1, number2){
    return number1 * number2;
}
function divideTwoNumbers(number1, number2){
    return number1 / number2;
}

// function calling
console.log(`The result is ${sumTwoNumbers(2,6)}`);
console.log(`The result is ${subtractTwoNumbers(2,6)}`);
console.log(`The result is ${multiplyTwoNumbers(2,6)}`);
console.log(`The result is ${divideTwoNumbers(2,6)}`);

// SCOPES
let input = 5; // This lives in the global scope. That is the parent of all scopes
function sumTwoNumbers(number1, number2){ // This is a function scope. Everything inside the function { } is it's function scope
    let result = number1 + number2 + input;
    console.log("first:" + result);
    if(input === 5){
        let result1 = number1 + number2 - input; // let is contained in the block scope. This means that it only lives in the { } block ( in this caase the if { })
        var someNumber = 66; // var is contained in the function scope that it is contained in ( in this case the sumTwoNumbers function { } )
        console.log("second:" + result);
    }
    console.log("third:" + result); // We can't access the result1 variable here because it is declared with let and it is locked in the if {}
    console.log("someNumber = " + someNumber) // We can access someNumber because it is a var variable and it is contained in the whole function sumTwoNumbers
}

sumTwoNumbers(2,5);
console.log(result); // We can't access something in the function scope from the outside ( let and var included )
// let can't be declared two times. Var can be declared multiple times
let x = 5;
let x = 7;
// We can however declare it and then reasign it. This is the better way of doing things
let y = 5
y = 7;
console.log(x);

// ANONIMOUS FUNCTIONS
// Putting an annonimous function in a variable, making the variable act as a function
let myFunc = function(x){
    console.log(x);
}
// Adding a shorter version of the same annonimous function ( arrow function )
let myFuncShort = (x) => {
    console.log(x);
}
// Calling the variables as functions ( Spoiler alert: It works )
myFunc("hello");
myFuncShort("hello");

// USER INPUT AND PARSING
let x = parseInt("25"); // parsing a string in to a whole number (integer)
let y = parseFloat("25.6"); // parsing a string in to a decimal number
let userStringInput = prompt("Enter some string:"); // getting input from prompt in to a variable ( prompt always returns a string )
let userNumberInput = parseFloat(prompt("Enter some decimal number:")); // getting input from prompt and converting it in to a number and putting it inside a variable

console.log(userInputNumber);
console.log(userStringInput);

// Exercise 2 - Only function for celsius in to fahrenheit
function convertCelsius(celsius){
    let result = celsius * 1.8 + 32;
    return result;
}
// Exercise 2 - Generic function that works for celsius and fahrenheit
function convertDegrees(number, type){
    if(type === "C"){
        let result = number * 1.8 + 32;
        return result; 
    } else if(type === "F"){
        let result = (5/9) * (number-32);
        return result; 
    } else {
        return "No such type";
    }
}
let userTypeInput = prompt("Enter C for celsius and F for fahrenheit:");
let userInput = parseInt(prompt("Enter number:"));
//alert(convertCelsius(userInput));
alert(convertDegrees(userInput, userTypeInput));
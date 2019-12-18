//class3 Functions

//function declaration
function functionName() {
    console.log("Hello world!");
}

//function calling/invoking
functionName();
functionName();

//function with input parameters
function sumOfTwoNumber(number1, number2) {
    let result = number1 + number2;
    console.log(result);
}

//invoking function with parameters
sumOfTwoNumber(10, 15);
sumOfTwoNumber(5, 22);
sumOfTwoNumber(8, 2);

//string input parameter(s)
function printText(inputText) {
    console.log(inputText);
}

printText("Some random text.");
printText("Some random text 2.");


//function can return a value
function multiply(number1, number2) {
    let result = number1 * number2;
    return result;
}

let resultOfmultiplyFunction = multiply(10, 5)
console.log(resultOfmultiplyFunction);

//anything that is returning a value can be a input parameter
sumOfTwoNumber(multiply(3, 2), resultOfmultiplyFunction);

//everything after the return keyowrd won't be executed
function uslessFunction() {
    return 3;
    console.log("some text");
    console.log("some text");
    console.log("some text");
}

uslessFunction();

function uslessFunction2(input) {

    if(input !== 1) {
        console.log("its not a 1")
        return;
    }

    console.log(input);
}

uslessFunction2(5);

//default input parameters
function nameGenerator(name, surname = "default", middlname = "default2") {
    return `${name} ${surname} ${middlname}`;
}

console.log(nameGenerator("Viktor", "Jakovlev"))


//class4 Functions

//JavaScript built in functions
let number = parseInt("5");
let number2 = Number("5");
let text = String(555);
let decimal = parseFloat("554.15");

let number1 = 2.9;

//number1 = Math.round(number1);
number1 = Math.floor(number1);

console.log(number1);

let sqr = Math.sqrt(3);
console.log(sqr);

let pi = Math.PI;
console.log(pi);


//scope
let testVar = "global scope";

function func1() {
    let testVar = "local scope";
    let testVar2 = "insde the function";
    console.log(testVar);

    function func2() {
        console.log(testVar2);

        function func3() {
            console.log(testVar2);
        }
    }

    func2();
}

func1();

//returns not defined in the console because the function is declared in other scope
//console.log(testVar2);

let message = "Outside the function";						
function warning(message) {
    console.log(message);
}

console.log("Inside the function");
console.log(message);

//variable value can be a function
let functionValue = function(a, b) {
    return a + b;
}

console.log(functionValue(5, 6))

//arrow function
function foo() {
    return 5;   
}

let foo1 = () => 5;
let foo2 = (a, b) => a * b;
let foo3 = c => c * 2;


console.log(foo());
console.log(foo1());
console.log(foo2(5,2));
console.log(foo3(5));
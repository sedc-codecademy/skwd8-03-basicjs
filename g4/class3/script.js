//function
// console.log("Outside the function.");



// function testFunction() {
//     console.log("Hello world.");
// }

// testFunction();
// testFunction();
// testFunction();
// testFunction();

// function sumOfTwoNumber(number1, number2) {
//     let result = number1 + number2;
    
//     console.log(result);
// }

// sumOfTwoNumber(10, 15);
// sumOfTwoNumber(5, 22);
// sumOfTwoNumber(8, 2);

// function printText(inputText) {
//     console.log(inputText);
// }

// printText("Some random text.");
// printText("Some random text 2.");


// function multiply(number1, number2) {

//     let result = number1 * number2;
//     return result;
// }

// let resultOfmultiplyFunction = multiply(10, 5)

// sumOfTwoNumber(resultOfmultiplyFunction, 5);


// function uslessFunction() {

//     return 3;
//     console.log("some text");
//     console.log("some text");
//     console.log("some text");
// }

// uslessFunction();


// function uslessFunction2(input) {

//     if(input !== 1) {
//         console.log("its not a 1")
//         return;
//     }

//     console.log(input);
// }

// uslessFunction2(5);

// function nameGenerator(name, surname = "default", middlname = "default2") {

//     return `${name} ${surname} ${middlname}`;

// }

// console.log(nameGenerator("Viktor", "Jakovlev"))


//clas2 functions


//buildin functions 

//let number = parseInt("5");
// let number = Number("5");
// let text = String(555);
// let decimal = parseFloat("554.15");

// let number1 = 2.9;

// //number1 = Math.round(number1);
// number1 = Math.floor(number1);

// console.log(number1);

// let sqr = Math.sqrt(3);
// console.log(sqr);

// let pi = Math.PI;
// console.log(pi);


//scope


// let testVar = "global scope";

// function func1() {
//     let testVar = "local scope";
//     let testVar2 = "insde the function";
//     console.log(testVar);

//     function func2() {
//         console.log(testVar2);

//         function func3() {
//             console.log(testVar2);
//         }
//     }

//     func2();
// }

// func1();


//console.log(testVar2);


var message = 'Outside the function';						
function warning(message) {
    console.log(message);
}

warning('Inside the function');
console.log(message);


// let foo = function(a, b) {
//     return a + b;
// }

// console.log(foo(5, 6))

//arrow function
function foo() {
    return 5;   
}

let foo1 = () => 5;
let foo2 = (a, b) => a * b;
let foo3 = c => c * 2;


console.log(foo());
console.log(foo1())

console.log(foo2(5,2))

console.log(foo3(5))



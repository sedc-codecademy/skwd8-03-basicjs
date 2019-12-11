// console.log("Script connected!");


// ********* Chinesee zodiac sign exercises, reworked by using Switch statement ************

// let input = prompt("Please insert your birth year!");
// let year = parseInt(input);

// let value = (year - 4) % 12;

// switch (value) {
//     case 0:
//         console.log("Rat");
//         break;
//     case 1:
//         console.log("Ox");
//         break;
//     case 2:
//         console.log("Tiger");
//         break;
//     case 3:
//         console.log("Rabbit");
//         break;
//     case 4:
//         console.log("Dragon");
//         break;
//     case 5:
//         console.log("Snake");
//         break;
//     case 6:
//         console.log("Horse");
//         break;
//     case 7:
//         console.log("Goat");
//         break;
//     case 8:
//         console.log("Monkey");
//         break;
//     case 9:
//         console.log("Rooster");
//         break;
//     case 10:
//         console.log("Dog");
//         break;
//     case 11:
//         console.log("Pig");
//         break;
//     default:
//         console.log("Please enter a valid year and not a character!")
//         break;
// }

// ********* Function declarations ************
// function sayHello(){
//     console.log("Hello, this is my first function!");
// }

// ********* Function execution (Function Call) ************

// sayHello();

// function sum(){
//     let firstNumber = 10;
//     let secondNumber = 5032;
//     let result = firstNumber + secondNumber;
//     console.log(`The result is: ${result}`);
// }
// sum();


// ********* Functions with input parameters (Arguments) ************
// function add(x, y) {
//     let sum = x + y;
//     console.log(sum);
// }
// add(1, 123);
// add(10, 20);
// add(35, 88);

// function sayMyFullName(firstName, lastName) {
//     console.log(`Hello my name is ${firstName} ${lastName}`);
// }

// sayMyFullName("John", "Doe");


// ********* Returning value functions ************

// function add(x, y) {
//     let result = x + y;
//     return result;
// }
// console.log(add(10, 20));

// function complexCalculation(a, b, c, d) {
//     // let calculation = (a + b) / (c + d);
//     let result = add(a, b) / add(c, d);      // Using a function inside another function example
//     console.log(result);
// }

// complexCalculation(10, 15, 5, 8);

// let addTwoNums = add(10, 20);
// console.log(addTwoNums);
// alert(addTwoNums);
// document.write(addTwoNums);


// ********* Default parameter values ************

// function sendEmail(to, from, subject, message){
//     console.log(`
// To: ${to},
// From: ${from}
// Subject: ${subject}
// Message: ${message}    
//     `);
// }


// sendEmail("dejan.jovanov@gmail.com", 
//          "martin-panovski@gmail.com", 
//          "Homework 3", 
//          "Hello Dejan, here is my homework!");


// sendEmail("dejan.jovanov@gmail.com", 
//          "martin-panovski@gmail.com", 
//          "Homework 3", 
//          "Hello Dejan, here is my homework!", "This is extra!");


// sendEmail("dejan.jovanov@gmail.com", 
//          "martin-panovski@gmail.com");


// let x;
// if (2 > 3) {
//     x = "dejan.jovanov@gmail.com";
// }
// console.log(x);
// function sendEmail(to = "sedc@gmail.com", from, subject = "Homework", message) {
//     console.log(`
// To: ${to},
// From: ${from}
// Subject: ${subject}
// Message: ${message}    
//     `);
// }

// sendEmail(undefined, "martin-panovski@gmail.com", undefined, "Hello!");
// sendEmail("dejan.jovanov@gmail.com", "martin-panovski@gmail.com", undefined, "Hello!");
// sendEmail("dejan.jovanov@gmail.com", "martin-panovski@gmail.com", "Hello!");
// sendEmail(x, "martin-panovski@gmail.com", x, "Hello!");



// ********* Scopes ************

// function printMessage(message){
//     let greeting = "Hello ";
//     console.log(greeting + message);
// }

// let greeting = "Hi";

// printMessage("Martin!");
// console.log(greeting);

let age = 20;
let name = "Petar";

function doSomething(){
    console.log(name);
}
doSomething();

let outside = "Outside the function";

console.log("Before: ", outside);

function printInfo(outside){
    outside = "Inside the function";
    console.log("Function: ", outside);
}

printInfo(outside);

console.log("After: ", outside);

let a = 10;
let b = 20;

function addTwo(){
    let c = 3;
    console.log(a + b)
}

addTwo();
console.log(c);
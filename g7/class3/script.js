console.log("The script is connected");

// let input = prompt("What day is it?");

// switch(input){
//     case "Monday":
//     case "Wednesday":
//         console.log(" YOU ARE IN CLASS! GO GO GO! ");
//         break;
//     case "Tuesday":
//     case "Thursday":
//     case "Friday":
//     case "Sunday":
//         console.log(" Relax dude! You are not in class. Do your homework!");
//         break;
//     case "Saturday":
//         console.log(" Maybe you have a class? Check the schedule!");
//         break;
//     default:
//         console.log(" That is not really a day. Please refresh the page and try again!");
//         break;
// }

// Functions

// Declaration 
function sayHello(){
    console.log("Hello there!"); // this will not execute while declaring
}

// Calling function
// ( The function keyword is for declaring, no keword for calling )
sayHello();
sayHello();
sayHello();
sayHello();

// Arguments
function sayHelloByName(name){
    console.log(`Hello there ${name}`); // interpolation ( Fancier )
    // console.log("Hello there " + name); // This is the same as the one above
    // console.log('Hello there ${name}'); // this will not print the name from the variable
}

sayHelloByName("Bob");
sayHelloByName("Jill");
sayHelloByName("Greg");

// Arguments

// Bad example
let num1 = 5;
let num2 = 10;

function sum(){
    let result = num1 + num2;
    console.log(result);
}

sum();

num1 = 4;
num2 = 16;
sum();

num1 = 3;
num2 = 14;
sum();

num1 = 100;
num2 = 115;
sum();

// Nicer example
let sumCount = 0; // Where we might use a variable from the outside
function sumSupperior(num1, num2){
    let result = num1 + num2;
    sumCount++;
    console.log(result);
    // console.log(num1 + num2);
}

sumSupperior(5, 10);
sumSupperior(4, 16);
sumSupperior(3, 14);
sumSupperior(100, 115);
console.log(`Sum was called ${sumCount} times!`);

// Reutrn
console.log("----------RETURN EXAMPLES")
function subtract(num1, num2){
    let result = num1 - num2;
    return result;
    console.log("WE ARE DONE!");
}

subtract(4, 1);

let subtracted = subtract(5, 2);
console.log(subtracted);

// empty return

function checkIfEven(number){
    if(number % 2 !== 0){
        return; // emergency exit from the function ( it returns undefined )
    }
    console.log("The number is even!"); // this will not execute if the if statement above is true
}

function uselessFunc(){
    return;
    console.log("3r2dfdfsdfdsfs");
    console.log("3r2dfdfsdfdsfs");
    console.log("3r2dfdfsdfdsfs");
    console.log("3r2dfdfsdfdsfs");
    console.log("3r2dfdfsdfdsfs");
}
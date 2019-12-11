let a = 1;
let b = 2;
let result = a + b;
// console.log(result);

let c = 3;
let d = 4;
let result2 = c + d;
// console.log(result2);

// INPROPER FUNCTION CALLING
// calculateTwoNumbers();

// FUNCTION DECLARATION
// function calculateTwoNumbers() {
//     let e = 1;
//     let f = 2;
//     let result3 = e + f;
//     console.log(result3);
// }

// PROPER FUNCTION CALLING
// calculateTwoNumbers();

// Simple function
function sayHello() {
    alert("Hello world!");
}

// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();


// Simple func with parameters

// function sayHelloToUser(firstName) {
//     console.log(`Hello ${firstName}`)
// }

// sayHelloToUser('Petar');
// sayHelloToUser(false);

// function sayHelloToUser(firstName, lastName) {
//     console.log(`Hello ${firstName} ${lastName}`)
// }

// sayHelloToUser("Vojdan", "Petrovski")

function calculateTwoNumbers(e, f) {
    let result3 = e + f;
    console.log(result3);
}

// properly called func
// calculateTwoNumbers(1, 2)
// calculateTwoNumbers(4, 4)
// calculateTwoNumbers(10, 20)
// calculateTwoNumbers(1.2, 1.3)
// not properly called
// calculateTwoNumbers('Hello', 'Trajan')
// calculateTwoNumbers();
// calculateTwoNumbers(4)
// calculateTwoNumbers('Ivo');
// calculateTwoNumbers(1, 2, 3)

function average(num1, num2, num3){
    if((typeof(num1) === 'number' && num1 > 0)
    && (typeof(num2) === 'number' && num2 > 0)
    && (typeof(num3) === 'number' && num3 > 0)){
        let result = (num1 + num2 + num3) / 3;
        console.log(`Average of three numbers ${num1},
         ${num2} and ${num3} is ${result}`);
    }else{
        console.log("Please enter a number that is positive.");
    }
}

// average('number', 4, 4);
// average();
// average(10,20,30);
// average(10,20,350);
// average(10,20,30,40,50);

// Func returning values
function sumOfThreeNumber(num1, num2, num3) {
    let result = num1 + num2 + num3;
    return result;

}

let first = sumOfThreeNumber(1,2,3);
let second = sumOfThreeNumber(2,3,4);

// calculateTwoNumbers(first, second);

function callCalculateNumber(num1, num2){
    calculateTwoNumbers(num1,num2);
}

// console.log(sumOfThreeNumber(1, 2, 3));


function three(){
    return 3;
}
let abc = three();
// console.log(abc);

function isUserMature(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
    // this code will never get executed
    console.log('after return')
}
// func call without saving the returned data
isUserMature(15);

// func call with saving the returned data
let isMature1 = isUserMature(12);
let isMature2 = isUserMature(22);
// console.log(isMature1)
// console.log(isMature2)

// EXERCISE 2

// Write a function that will take 3 parameters:
// - firstName, lastName, age
// if user is mature, show:
// "Hi FIRST_NAME LAST_NAME, welcome to the site."
// if user is not mature, show:
// "Sorry, FIRST_NAME LAST_NAME, you are not allowed"


function grantAccess(firstName, lastName, age) {
    if (isUserMature(age)) {
        console.log(`Hi ${firstName} ${lastName}
        , welcome to the site.`);
    } else {
        console.log(`Sorry ${firstName} ${lastName}, you are not allowed`);
    }
}

grantAccess('Nikola', 'Nikolovski', 17)




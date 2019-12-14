console.log("The script is connected");

// Independent function
// It takes what it needs through arguments ( the person that calls the function takes care of the values)
// It returns only what is necessary ( the person that called the function will get only the result and can't access anything else )
function annoySomeone(person, times){
    let result = `I am calling ${person} ${times} times a day!`;
    // Annoying in progress...
    return result; // function ends here
}
// We decided to call the function in console.log
console.log(annoySomeone("Bob", 5));

// We decide to call it again but with values from user input
let inputPerson = prompt("Please enter victum:"); // return string
let inputTimes = prompt("Please enter annoying level:"); // return string

let inputTimesConverted = parseInt(inputTimes); // We convert it to number because we need a number
console.log(annoySomeone(inputPerson, inputTimesConverted));
// Alternate version
// let inputTimes2 = parseInt(prompt("Please enter annoying level:")); // this will convert only whole numbers
// Number(prompt("Please enter annoying level:")) // this will convert any number

// 1. First the variable is declared
// 2. Then js tries to call parseInt
// 3. It sees that the argument is another function
// 4. Then js tries to call prompt
// 5. prompt waits for the user to enter a value
// 6. The value from the input is the return of the function prompt
// 7. That value is added as argument to parseInt
// 8. parseInt executes and tries to convert the value provided in to a whole number
// 9. The whole number is the return value of parseInt
// 10. the retun value from parseInt is assigned to the variable

// SCOPES

let x = 7; // The history of the variable -> line 39: 5 -> line 43: 100
function a(){
    console.log("We are in the a scope before we change stuff:");
    console.log(x)
    x = 5;
    console.log("We are in the a scope:");
    console.log(x); // 5
    function b(){
        x = 100;
        console.log("We are in the b scope:");
        console.log(x); // 100
    }
    b();
    console.log("We are in the a scope but b is done executing:");
    console.log(x); // 100
}
a();
console.log("We are in the global scope:");
console.log(x); // 100
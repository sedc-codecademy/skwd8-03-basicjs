console.log("Our script is connected");

// Working with strings
let name1 = "Bob";
let connected1 = "Hello" + " " + "Bob";
let connected2 = "Hello " + "Bob";
let connected3 = "Hello " + name1;
let connected4 = `Hello ${name1}`;

console.log(connected1);
console.log(connected2);
console.log(connected3);
console.log(connected4);
// first connected2 === connected4 -> true , true === 'Hello Bob' -> false, final is false
console.log(connected2 === connected4 === connected1 === connected3);
// (connected2 === connected4) -> true , (connected1 === connected3) -> true, final is true
console.log((connected2 === connected4) === (connected1 === connected3));

// Number strings
let numbersAndStrings1 = "2" - 5;
console.log(numbersAndStrings1);
let numbersAndStrings2 = 5 - "2";
console.log(numbersAndStrings2);
let numbersAndStrings3 = 5 / "2";
console.log(numbersAndStrings3);
let numbersAndStrings4 = "2" / 5;
console.log(numbersAndStrings4);

// String strings
let numbersAndStrings5 = "Two" - 5;
console.log(numbersAndStrings5);
let numbersAndStrings6 = 5 - "Bob";
console.log(numbersAndStrings6);
let numbersAndStrings7 = 5 / "Bob";
console.log(numbersAndStrings7);
let numbersAndStrings8 = "Bob" / 5;
console.log(numbersAndStrings8);

console.log("-----NAN MAGIC-----");
// NaN Magic
// isNaN checks if the value is not a number
let nan1 = isNaN(numbersAndStrings1);
let nan2 = isNaN(numbersAndStrings5);
let nan3 = isNaN(2);
let nan4 = isNaN("Bob");

console.log(nan1);
console.log(nan2);
console.log(nan3);
console.log(nan4);

console.log("-----Number.NaN MAGIC-----");
// Number.isNaN
let nan5 = Number.isNaN(numbersAndStrings1);
let nan6 = Number.isNaN(numbersAndStrings5);
let nan7 = Number.isNaN(2);
let nan8 = Number.isNaN("Bob");

console.log(nan5);
console.log(nan6);
console.log(nan7);
console.log(nan8);

console.log("----- Logical operators ------")
// Logical Operators
let logic1 = (5 > 2) && (2 < 10); // true && true
let logic2 = (2 < 3) || !(3 > 2); // true || false

console.log(logic1);
console.log(logic2);

// NaN - Not a number ( we get it by doing broken operations with strings and numbers usually )
// Two functions that check for something if its not a number
// isNaN - Checks if the value is not a number ( any value )
// isNaN - if it is an number it is false
// Number.isNaN - Checks if the value is this particular type -> NaN
// Number.isNaN - if the thing is not NaN then it returns false

// Control of flow ( IF )
console.log("----- Treasure Hunt 1 -------");
let bankAccount = 0;
let secretWord = "potato";
let word = "tomato"; // nothing happens
// let word = "potato"; // we get treasure
// When we guess the word we get a treasure. If we don't nothing happens
if(word === secretWord){
    console.log("YOU FOUND THE TREASURE!");
    bankAccount = 100000000000;
}
console.log("----- Treasure Hunt 2 -------");
// When we guess the word we get a treasure. If we don't we are cursed :-(
if(word === secretWord){
    console.log("YOU FOUND THE TREASURE!");
    bankAccount = 100000000000;
} else {
    console.log("THAT IS NOT THE WORD. YOU ARE CURSED!");
    bankAccount = - 10000000000;
}
console.log("----- Treasure Hunt 3 -------");
// If we guess the word we get a treasure, if we don't guess the word but guess one letter we get 50 dolars and if we don't get anything right we get cursed
let firstLetter = "i";
let checkFirstLetter = word[0]; // how to find the first letter of the word automatically
// This is one if statement
if(word === secretWord){ // if this is true, it will not execute the others
    console.log("YOU FOUND THE TREASURE!");
    bankAccount = 100000000000;
} else if(firstLetter === "p"){
    console.log("AT LEAST YOU GOT SOMETHING RIGHT.");
    bankAccount = 50;
} else {
    console.log("THAT IS NOT THE WORD. YOU ARE CURSED!");
    bankAccount = - 10000000000;
}

if(word === "tomato"){
    console.log("THE TOMATO GODS SAVED YOU!");
    bankAccount = 0;
}


if(5 > 2){
    if(4 > 2){
        console.log("This is okay!");
    } else {
        console.log("Its not okay");
    }
    console.log("This is okay!");
} else {
// Some code to reflect negatively
}
// Input from a user
let inputNumber = prompt("enter some number:"); // shows the popup and the user on the browser enters 23
let convertedNumber = parseInt(inputNumber); // converts the "23" into 23
console.log(`Your number + 10 is ${convertedNumber + 10}`); // here we show some result
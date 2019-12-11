//homework
let phones = 30;
let price = 119.95;
let tax = 0.05;

let phonesPrice = phones * price;
let taxedPrice = phonesPrice * tax;
let result = phonesPrice + taxedPrice;

// strings
let textResult1 = "The price with tax on " + phones + " phones if the price on one phone is " + price + "$ is " + result + "$.";
let textResult2 = `The price with tax on ${phones} phones if the price on one phone is ${price}$ is ${result}$.`;
console.log(textResult1);
console.log(textResult2);

let text = "random string";
let text2 = "another random strging";

let finalText = text + " " + text2 + 5;
console.log(finalText);

let result2 = 2 + "5";
console.log(result2);

//using single quotes inside double quotes
let quotes = "It's really nice to be a programmer";
console.log(quotes);

// will throw an error
//let quotes = 'It's really nice to be a programmer';

let x;
//let x = null;
let y = 10;

let nullVSundefined = x * y;
console.log(nullVSundefined);

// isNaN will check if the input inside the round brackets is NOT A NUMBER and, if it's not, will return TRUE.
let isNaNcheck = isNaN(result);
console.log(isNaNcheck);

// + and - Infinity
let maxNegative = -Infinity;
let maxPositive = -Infinity;

let pass = 50;
let score = 90;
// comparison operators will always return boolean
let hasPassed = score >= pass;
console.log(hasPassed);

// logical operators may return a non-Boolean value when used with non-boolean values
let a = 5;
let b = 10;
let c = 8;
let d = 12;

let result3 = (a > b) && (c < d);
console.log(result3)

let result4 = (a < b) && (c < d);
console.log(result4)

let result5 = (a > b) || (c < d);
console.log(result5)

let result6 = (a > b) || (c > d);
console.log(result6)

//&&
let a1 = "Cat" && "Dog";
console.log(a1);

let a2 = "Cat" && false;
console.log(a2);

let a3 = "" && false;   // return empty string
console.log(a3);

let a4 = 0 && "";
console.log(a4);

//&&
let a5 = "Cat" || "Dog";
console.log(a5);

let a6 = "Cat" || false;
console.log(a6);

let a7 = "" || false;   
console.log(a7);

let a8 = 0 || ""; // retruns empty string
console.log(a8);

//logical not
let a9 = !true;
console.log(a9);

let a10 = !"Cat";
console.log(a10);

let a11 = !!"Dog";
console.log(a11);

// /double negation
let a12 = !!"";
console.log(a12);

// control structures
let playerScore = 0;
if(playerScore > 100) {
    console.log("You won!")
} else {
    console.log("Try again!")
}

//adding multiple options
let fridayCash =  "dsa"; //parseInt(prompt("Enter your budget:"));

if(isNaN(fridayCash)){
    console.log("Enter numbers only");
} else if (fridayCash >= 100){
    console.log("Straight in The Pub");
} else if (fridayCash >= 70){
    console.log("Go to Cinema or diner");
} else if (fridayCash >= 35){
    console.log("Stay in the Hood");
} else  {
    console.log("stay home and watch TV")
}

//switch
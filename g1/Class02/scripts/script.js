console.log("Hello from Javascript");

// let baseUrl = "www.google.com";
// // with concatenation 
// let newsUrl = baseUrl + "/news";
// let aboutUrl = baseUrl + "/about";
// let contactUrl = baseUrl + "/contact";

// // with backticks
// let contactUrl2 = `${baseUrl}/contact`;

// console.log(contactUrl);
// console.log(contactUrl2);


// let pass = 90;
// let score = 70;

// let isPassed = score >= pass;

// console.log(isPassed);

// let score1 = 100;
// let score2 = 100;

// let hightScore = 101;
// let hightScore2 = 102;

// let higher = ((score1 + score2) < (hightScore + hightScore2));

// console.log(higher);

// let a = 10;
// let b = 20;

// let c = 30;
// let d = 35;

// let isTrue = ((a > b) && (c < d));
// console.log(isTrue);

// let odd = (3 % 2 == 0);
// console.log(odd);

// let abc = !"Cat";
// console.log(abc);

// let isHigher = !(5 > 2);

// let a = 40;
// let b = "40";

// let isSame = a == b; // true
// let isSameStrict = a === b; // false

// console.log(isSame);
// console.log(isSameStrict);

// let score = 99;

// if (score > 100) {
//     alert("You won!");
// } else {
//     alert("Im in Else. Yuhu");
// }

let score = 2;

// ( (condition1) && (condition2) )

// if (score >= 90) {
//     alert("You won first prize");
// } else if (score >= 80) {
//     alert("Second Prize");
// } else if (score >= 70) {
//     alert("Third prize");
// } else {
//     alert("Looser!");
// }


// if (condition) {
//     // if code goes here...
// } else if (condition) {
//     // else if code goes here...
// } else {
//     // else code goes here...
// }

// let number = 20;

// if (number % 2 == 0) {

// } 

// let num1 = 12;
// let num2 = 11;

// let result = num1 - num2;

// if ( (result % 2 == 0) && result > 10) {
//     alert("Perfect");
// } else if (result < 0) {
//     alert("Error");
// } else {
//     alert("Not Perfect");
// }

// let day = "Trajan";

// switch (day) {
//     case "Monday":
//         console.log("It is Monday");
//         break;
//     case "Tuesday":
//         console.log("It is Tuesday");
//         break;
//     case "Wednesday":
//         console.log("It is Wednesday");
//         break;
//     case "Thursday":
//         console.log("It is Thursday");
//         break;
//     case "Friday":
//         console.log("It is Friday");
//         break;
//     case "Saturday":
//         console.log("It is Saturday");
//         break;
//     case "Sunday":
//         console.log("It is Sunday");
//         break;
//     default:
//         console.log("Its end of the world");
//         break;
// }

// switch (5-3) {
//     case 2:
//         console.log("its 2");
//         break;
//     default:
//         console.log("its not 2");
// }

let day = "Friday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It is working day");
        break;
    case "Saturday":
    case "Sunday":
        console.log("its weekend");
        break;
    default:
        console.log("Its end of the world");
        break;
}

// let number = 3;
// switch (number) {
//     case 1:
//         // some code ..
//         break; // ALWAYS break switch statment
//     case 2:
//         //some code..
//         break;
//     default:
//         break;
// }


// Math.abs();

// let num1 = 106;
// let num2 = 98;
// let condition = 100;
// let result1 = Math.abs(num1 - condition);
// let result2 = Math.abs(num2 - condition);

// if (result1 > result2) {
//     console.log(result2);
// }
// else if (result1 < result2) {
//     console.log(result1);
// }
// else {
//     console.log("The numbers are equal.")
// }


let year = 2000;

switch ((year - 4) % 12) {
    case 0:
        console.log("Rat")
        break;
    case 1:
        console.log("Ox")
        break;
    case 2:
        console.log("Tiger")
        break;
    case 3:
        console.log("Rabbit")
        break;
    case 4:
        console.log("Dragon")
        break;
    case 5:
        console.log("Snake")
        break;
    case 6:
        console.log("Horse")
        break;
    case 7:
        console.log("Goat")
        break;
    case 8:
        console.log("Monkey")
        break;
    case 9:
        console.log("Rooster")
        break;
    case 10:
        console.log("Dog")
        break;
    case 11:
        console.log("Pig")
        break;
    default:
        console.log("Its not a good year")
        break;
}




console.log("Finished");
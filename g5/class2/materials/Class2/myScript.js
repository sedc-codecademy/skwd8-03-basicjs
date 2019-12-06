// Console log writes in console
console.log("Hello SEDC!");

// Strings
let myFirstString = "Hello!"; // a string
let connectedString = 
	myFirstString + " " + "Trajan"; // concatanation
console.log(connectedString);

// Types of strings
let string1 = myFirstString + " Trajan!"; 
let string2 = myFirstString + ' Trajan!';
let string3 = `${myFirstString} Trajan!`; // new way of writing strings
let multipleLines = `Hello
SEDC in another line!`
console.log(string1);
console.log(string2);
console.log(string3);
console.log(multipleLines);

// Operations
let operation1 = 5 > 3; //true
let operation2 = (4 + 5) === (2 + 7); //true
let operation3 = ("2" + "3") == (19 + 4); // true
console.log("operacija1 = "+ operation1);
console.log("operacija2 = "+ operation2);
console.log("operacija3 = "+ operation3);

let operation4 = (2 > 3) && (5 == "5"); // false
let operation5 = true || !(3 === "3"); // true
let operation6 = ((2 + 5) < 7) || false; // false
let operation900 = ((2<5) && (2==2)) && operation5; // true 

console.log("operacija4 = "+ operation4);
console.log("operacija5 = "+ operation5);
console.log("operacija6 = "+ operation6);
console.log("operacija900 = "+ operation900);

// If/Else
let num1 = 3;
let num2 = 5;
// F || T
if(typeof(num1) !== "number" 
|| typeof(num2) !== "number"){
	console.log("Not a number");
} else if(num1 > num2){
	console.log("The first one is larger!");
} else if(num2 > num1) {
	console.log("The second one is larger!");
} else {
	console.log("Maybe they are equal!");
}

// Switch
let day = "monday";
let praznik = false;
switch(day){
	case "monday":
	case "wednesday":
	case "saturday":
	case "sunday":	
		if(praznik === true){
			console.log("PRAZNIK");
		}else {
			console.log("You are free!");
		}
		break;
	case "thursday":
	case "tuesday":
		console.log("You are at SEDC!");
		break;
	case "friday":
		console.log("KAFANA!");
		break;
	default:
		console.log("NO DAY LIKE " + day);
		//console.log("ERROR!");
		break;
}

// Exercise1
let number1 = 99;
let number2 = 101;
let test = 100;
let razlika1 = test - number1;
let razlika2 = test - number2;

if(razlika1 < 0){
	razlika1 *= -1;
	//razlika1 = razlika1 * -1;
	//razlika1 = Math.abs(razlika1);
}
if(razlika2 < 0){
	razlika2 *= -1;
}

if(razlika1 < razlika2){
	console.log(number1 + " is closer!");
} else if(razlika2 < razlika1) {
	console.log(number2 + " is closer!")
} else {
	console.log(number1 + " and " + number2 + " are equaly close!");
}

// Excercise2
let num3 = 7;
let num4 = 10;

if ((num3 % 2) === 0) {
	console.log(`Number ${num3} is even`);
} else {
	console.log(`Number ${num3} is odd`);
}

if (num4 % 2 === 0) {
	console.log(`Number ${num4} is even`);
} else {
	console.log(`Number ${num4} is odd`);
}
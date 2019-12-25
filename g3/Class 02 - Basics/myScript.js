// Console log writes in console
console.log("Hello SEDC!");

// Strings
var myFirstString = "Hello!"; // a string
var connectedString = 
	myFirstString + " " + "Trajan"; // concatanation
console.log(connectedString);

// Types of strings
var string1 = myFirstString + " Trajan!"; 
var string2 = myFirstString + ' Trajan!';
var string3 = `${myFirstString} Trajan!`; // new way of writing strings
var multipleLines = `Hello
SEDC in another line!`
console.log(string1);
console.log(string2);
console.log(string3);
console.log(multipleLines);

// Operations
var operation1 = 5 > 3; //true
var operation2 = (4 + 5) === (2 + 7); //true
var operation3 = ("2" + "3") == (19 + 4); // true
console.log("operacija1 = "+ operation1);
console.log("operacija2 = "+ operation2);
console.log("operacija3 = "+ operation3);

var operation4 = (2 > 3) && (5 == "5"); // false
var operation5 = true || !(3 === "3"); // true
var operation6 = ((2 + 5) < 7) || false; // false
var operation900 = ((2<5) && (2==2)) && operation5; // true 

console.log("operacija4 = "+ operation4);
console.log("operacija5 = "+ operation5);
console.log("operacija6 = "+ operation6);
console.log("operacija900 = "+ operation900);

// If/Else
var num1 = 3;
var num2 = 5;
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
var day = "monday";
var praznik = false;
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








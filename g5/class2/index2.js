console.log(initialValue);

//Backtick string
console.log(`nothing external here`);

//Display the value of variable using backtick
console.log(`Value of initialValue variable is: ${initialValue}`);

//Display text in new line
console.log(`To go in a new line press 
enter`);

//Old way to display text in newline
console.log('Old way\nto go in new line');

//Old way to print a value
console.log('Value of initialValue variable is: ' + initialValue);

//Double qoutes
console.log("Double qouted text");

//Single qoute
console.log('Single qouted text');

//Single quote error
console.log('This isn\'t good example');

console.log('This isn'+"'t good example");

console.log("This isn't good example");

console.log(`This wasn't good example`);

//Comparison 


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

var operation7 = true && "0";
var operation8 = !"0";
var operation9 = "0" && true;
var operation10 = NaN + 10;
var operation11 = NaN && 1;

console.log("operacija7 = "+ operation7);
console.log("operacija8 = "+ operation8);
console.log("operacija9 = "+ operation9);

console.log("operacija10 = "+ operation10);
console.log("opreacija11 = "+ operation11);

var operation12 = NaN === 5;
console.log("operacija12 = "+ operation12);
var operation13 = NaN == 5;
console.log("operacija13 = "+operation13);

var operation14 = NaN + NaN;
var operation15 = NaN && NaN;

console.log(operation14);
console.log(operation15);
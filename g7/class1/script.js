console.log("Hello SEDC!");
console.log("Types examples:");
console.log(typeof('Hello'));
console.log(typeof(2));
console.log(typeof(2.5));
console.log(typeof(Infinity));
console.log(typeof(true));
console.log(typeof(undefined));
console.log(typeof(null));
console.log("Variables examples:");
/*
This is a comment
and it will not be executed by
javascript okay?
OKAY!
*/
// Declaration
let example1; // this is a one liner comment 
console.log(example1); // undefined
// Initialization
example1 = "BOB";
console.log(example1); // BOB
console.log(example1); // BOB
console.log(example1); // BOB
example1 = 2; // "BOB" will be removed and overriden by 2
console.log(example1); // 2
// Declaration and initialization
let name = "Jill";
let age = 67;
let isCool = true; 
console.log(isCool);

// Valid names
// YOU CANT HAVE 2 VARIABLES WITH THE SAME NAME
let name1 = "Bob";
let name2 = "Bob";
let $name = "Bob";
let _name = "Bob";
let $2name = "Bob";

// Invalid names ( They are commented out because they don't work! )

// let 23 = "Bob";
// let 23name = "Bob";
// let %name = "Bob";
// let #name = "Bob";
// let = "Bob";

// Operators
// JAVASCRIPT ALWAYS EXECUTE EXPRESSION FIRST
2 + 3; // Expression
let result1 = 2 + 3;
// 1. Declares space for result1
// 2. Executes expression 2 + 3 
// 3. Adds the result 5 in to result1 variable
console.log(result1);
console.log(2 + 5);
// 1. Write something in the console
// 2. Execute the expression 2 + 5
// 3. Put the result 7 in the console.log()
// 4. Execute the console.log with the result 7
let comparison = 3 > 5;
console.log(comparison);
let comparison2 = result1 <= 5; // 5 <= 5
console.log(comparison2);

// Equals ?
// = - Assign avariable or assign value
// == - Are two things equals of value
// === - Are two things equal of value AND TYPE
console.log(2 == "2");
console.log(2 === "2");
console.log((2 > 3) != 4);
// 1. 2 > 3  ->  false
// 2. false != 4  ->  true
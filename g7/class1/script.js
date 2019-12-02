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

let name = "Bob";
let name1 = "Bob";
let $name = "Bob";
let _name = "Bob";
let $2name = "Bob";

// Invalid names ( They are commented out because they don't work! )

// let 23 = "Bob";
// let 23name = "Bob";
// let %name = "Bob";
// let #name = "Bob";
// let = "Bob";


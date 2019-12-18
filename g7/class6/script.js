// Comparing while and do-while positive scenario
// While
let i = 0;
console.log("while");
while(i < 10){
    console.log(i);
    i++;
}

// Do-While
let ii = 0;
console.log("do-while");
do{
    console.log(ii);
    ii++;
}while(ii < 10);

// Comparing while and do-while negative scenario
// While
let iii = 0;
console.log("while 2");
while(false){ // false
    console.log(iii);
}

// Do-While
let iiii = 0;
console.log("do-while 2");
do{
    console.log(iiii);
}while(false); // false

// Using do-while to handle unpredictable data
// let input1;
// do{
//     input1 = prompt("Enter the letter m please!").toLowerCase(); // unpredictable data
//     // toLowerCase() makes the string all lower case
//     // toUpperCase() makse the string all upper case
// } while (input1 !== "m");
// console.log("You did it!");

// for
console.log("for");
for(let i = 0; i < 10; i++){
    console.log(i);
}

// comparison with going through arrays with while/for/for-of
console.log("while");
// Issues
// The counter is poluting our global scope
// We have to take care and remember the counter
// We have to take care and remember to increment/decrement
// students[j] is not intuitive
// Benefits
// It is great when used with unpredictable data
let students = ["Bob", "Jill", "Greg"];
let j = 0;
while(j < students.length){
    console.log(students[j]);
    j++;
}

console.log("for");
// Issues
// Students[i] is not intuitive
// Going through arrays has extra steps
// Benefits
// It is great for counting
// It has an internal counter
// It cares for the counter and the incrementing/decrementing
for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

console.log("for-of"); // shorthand for this is forof + Tab
// Issues
// It only works for arrays
// We can't count with it
// We can't go through in the opposite direction
// Benefits
// It is great for going through arrays
// It is very intuitive and easy to read
for (let student of students) {
    console.log(student);
}

// Break / Continue
// Get the first odd number
console.log("Find the first odd number!");
for(let i = 0; i < 10; i++){
    if(i % 2 !== 0){ // check if it's an odd number
        console.log(i);
        break; // This will stop the loop
    }
}
// Get all odd numbers
console.log("Find all odd numbers!");
for(let i = 0; i < 10; i++){
    if(i % 2 === 0){ // check if it's an even number
        continue; // This will skip the current cycle
    }
    console.log(i);
}

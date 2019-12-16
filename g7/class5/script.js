// Arrays

let notEmptyArray = ["Bob", "Jill", "Greg", "Mark"]; // Array with strings
let emptyArray = []; // Declaring empty array
let empty; // Empty variable

// Get value
console.log(notEmptyArray[1]); // Jill
console.log(emptyArray[1]); // undefined
// console.log(empty[1]); // error ( commentedd because gives error )

// We must create empty arrays when we need to work with arrays and start from 0
// If we use the functions or indexes on a variable that is not an array it will give us an error

console.log(notEmptyArray); // at this point in time mark is not changed to stefan because this code runs before we change it

// Change a value
notEmptyArray[3] = "Stefan"; // This will always change the index 3 no matter how many items we add after it ( not okay if we want to change the last index, use the code below )
notEmptyArray[notEmptyArray.length - 1] = "Stefan"; // This will always change the last item no matter how many items are before it

// Add new stuff in the array
// Simple approach
notEmptyArray[notEmptyArray.length] = "Billy"; // The length is 4 but the last index is 3. So we are not overwriting the last item, but adding a new one on the 4th index

console.log(notEmptyArray);

// Special function approach that adds stuff at the end of the array
notEmptyArray.push("Mark", "Debra"); 

console.log(notEmptyArray);

// Special function approach that adds stuff at the front of the array

notEmptyArray.unshift("Anne");

console.log(notEmptyArray);

// Bad way of removing something
notEmptyArray[0] = undefined; // This will not remove the first item, it will change it's value to undefined

console.log(notEmptyArray);

// Good way of removing something
notEmptyArray.shift(); // remove the first item for real
notEmptyArray.pop(); // remove the last item for real

console.log(notEmptyArray);

// Add item at the 100 index
notEmptyArray[100] = "Patricia";

console.log(notEmptyArray);

// LOOPS
console.log("WE ARE TALKING ABOUT LOOPS NOW!")
console.log("------------------------")
// While
let i = 0;
while(i < 10){ // if we write i <= 10 we will get the 10 as a valid statement as well
    console.log(`${i} is lesser than 10`);
    // i = i + 1;
    i++;
    // No shorthand for i = i + 2
}

let j = 1;
while(j <= 20){
    // let j = 1; // DO NOT PUT COUNTER INSIDE A WHILE LOOP. YOU WILL REGRET IT.
    if(j % 2 === 0){
        console.log(`${j} is even!`);
    } else {
        console.log(`${j} is odd!`);
    }
    j++;
};

let dogs = ["Rex", "Sparky", "Izzy"];

// Going through an array with while

let numbers = [1,2,3,65,8];
let k = 0;
let result = 0; // variables that you need to keep a value in, should stay outside of the loop
while(k < numbers.length){
    result = result + numbers[k];
    k++;
    // console.log(result); // print out every itteration
}
console.log(result); // print out the last result


function letTheDogsOut(array){ // array belongs in the function scope. Not the global. This means that this array attribute can have the same name as some variable outside
    let i = 0; // Counter
    while(i < array.length){ // This will go as many times as items in the array
        console.log(`Somebody let ${array[i]} out!`); // Here we use the item with index equal to the counter
        console.log("WHO WHO WHO?");
        i++;
    }
}

letTheDogsOut(dogs);
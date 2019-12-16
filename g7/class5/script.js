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

// CREATING AN ARRAY

// let daysOfTheWeek = ["Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday"
// ];

// console.log("Second day of the week: ", daysOfTheWeek[1]);

// // daysOfTheWeek[2] = "Sreda";

// console.log("Third day of the week updated: ", daysOfTheWeek[2]);
// console.log(daysOfTheWeek[daysOfTheWeek.length - 2]);

// console.log("Days of the week length: ", daysOfTheWeek.length);

// // BEFORE ADDING THE ELEMENT
// console.log('Element on position of the length of the array: ', daysOfTheWeek[daysOfTheWeek.length]);

// // HARDER WAY
// daysOfTheWeek[daysOfTheWeek.length] = 'New day of the week';

// //AFTER ADDING THE ELEMENT
// console.log('New element in the array: ', daysOfTheWeek[daysOfTheWeek.length - 1]);

// // EASIER WAY
// // daysOfTheWeek.push('Another day');
// // daysOfTheWeek.push(5);
// // daysOfTheWeek.push(false);
// // daysOfTheWeek.push(undefined);
// // daysOfTheWeek.push(null);

// daysOfTheWeek.push(5, false, null);

// // DELETING ELEMENTS OF THE ARRAY
// console.log('before', daysOfTheWeek.length);
// daysOfTheWeek.pop();
// console.log('after', daysOfTheWeek.length);


// LOOPING STRUCTURES
// let index = 0;
// while (index < daysOfTheWeek.length) {
//     console.log(daysOfTheWeek[index]);
//     index++;
// }

// EXAMPLE 1

// let numbers = [11, 33, 54, 76, 21, 0, 8, 69, 98, 87];
// let index = 0;
// let max = -Infinity;

// while (index < numbers.length) {
//     if (max < numbers[index]) {
//         max = numbers[index];
//     }
//     index++;
// }

// console.log('The maximum is: ', max);

// // Math.pow

// let x = 10;

// let square = Math.pow(x, 2);
// console.log('x', x);
// console.log('square', square);



// let x = 101;
// let sum = 0;

// while (x <= 150) {
//     sum = Math.pow(x, 2);
//     x++;
// }

// console.log(sum);

// let number = 789789231;

// let stringifiedNumber = String(number);

// console.log(stringifiedNumber);

// console.log(stringifiedNumber.length);
// console.log(stringifiedNumber[0]);

// let index = 0;

// while (index < stringifiedNumber.length) {
//     console.log(stringifiedNumber[index]);
//     index++;
// }


// DO WHILE EXAMPLE
// let counter = 1;

// do {
//     console.log('executed with counter: ', counter);
//     counter += 1;
// } while (counter < 1);

// FOR LOOP EXAMPLE
// let index = 0;

// while (index < stringifiedNumber.length) {
//     console.log(stringifiedNumber[index]);
//     index++;
// }

// for (let i = 0; i < stringifiedNumber.length; i++) {
//     // console.log(stringifiedNumber[i]);
//     // here go as much logic as you want
//     if (stringifiedNumber[i] === '7') {
//         console.log('This is lucky seven !');
//     } else {
//         console.log('Better luck next time !');
//     }
// }

// // REVERSE FOR LOOP
// for (let i = stringifiedNumber.length - 1; i >= 0; i--) {
//     console.log(stringifiedNumber[i]);
// }

// console.log('Martin \nPanovski');

// let myArray1 = [1, 2, 3, 4, 5, 6, 6];
// let myArray2 = [1, 2, 3, 4, 5, 6, 6];
// let myArray3 = [1, 2, 3, 4, 5, 6, 6];
// let myArray4 = [1, 2, 3, 4, 5, 6, 6];

// function myFunc(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

// myFunc(myArray1);
// myFunc(myArray2);
// myFunc(myArray3);
// myFunc(myArray4);
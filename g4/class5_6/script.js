//Arrays

//empty array
let emptyArray = [];

//array with items inside
let array = [22, "Viktor", false, null];

//accessing the array item value
let arrayItemNumberOne = array[0];
console.log(arrayItemNumberOne)

let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun', 'Extra Day'];

//changing the array item value
days[4] = "Extra Day";
console.log(days[4]);

//accessing array item value can be used as any other value
console.log(days[2] === days[4]);

//array properties and methods
let daysLength = days.length;
console.log(daysLength);

//accesing the last item of the array
let lastItemOfDays = days[days.length - 1];
console.log(lastItemOfDays);

//adding item in the end of the array without using a method
days[days.length] = "Extra Day";
console.log(days[days.length - 1]);

//array built in methods
days.push(200, "Viktor", true);
console.log(days[days.length - 1]);

days.unshift("Viktor");
console.log(days[0]);

let lastRemovedItem = days.pop();
console.log(lastRemovedItem);

let firstDeletedItem = days.shift();
console.log(firstDeletedItem);

//for loop
let numbers = [18,1,12,5,57,9,35];
let result = 0;

for(let i = 0; i < numbers.length; i++) {
    console.log("cycle: " + i);
    result += numbers[i];
    console.log("adding number: " + numbers[i]);
    console.log("The result is: " + result)
    console.log("==========");
}

console.log("=========================");
console.log(result);

//while loop
let applesInBasket = 0;
let basketCapacity = 40;

function addApplesInBasket(howMany) {
    applesInBasket += howMany;
}

let counter = 0;
while(applesInBasket < basketCapacity) {
    addApplesInBasket(2);
    console.log("== one itteration")
    console.log(applesInBasket <= basketCapacity);
    console.log(applesInBasket)
    console.log("==========");
    counter++;
}

console.log(applesInBasket);
console.log(counter);

//for of loop
let array22 = [1,2,3,4,5];
let result = 0;

for(let item of array22) {   
    result += item * 2;
}

console.log(result);

//nested arrays
let arrayInArray = [[1,2],[4,6],[5,8,9]];

let firstArray = arrayInArray[0];
console.log(firstArray);

let itemInNestedArray = arrayInArray[1][2];
let itemInNestedArray2 = arrayInArray[2][1];

console.log(itemInNestedArray);
console.log(itemInNestedArray2);






var days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

console.log(days, days.length, days[1]);

var jsonStr = JSON.stringify(days); //Convert array to string
var tmpDays = JSON.parse(jsonStr); //Convert string to array

days[0] = "Monday";
days[1] = "Tuesday";
days[2] = 2;

console.log(days, tmpDays);

days[days.length] = 'some day';
days.push('some other day', 'new day', 'just day');
/* 
    for i < arg.length ; i++
    days[days.length] = arg[i];
*/

days.unshift('before monday', 'before monday 2');

//console.log(days);

//Manual delete (BAD)
days[days.length - 1 ] = undefined; // [undefined, 1, 2, undefined];
console.log(days);

//(GOOD)
let a = days.pop(); //Delete the last element and return its value
console.log(days, a);

let b = days.pop();
console.log(b);

//Manual delete first item (BAD)
days[0] = undefined;
console.log(days);

//(GOOD)
let c = days.shift(); //Delete first item and return its value
console.log(days);

//Remove element or elements from array at any position

days.splice(0, 2);
console.log(days);

//While
var days2 = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
// var counter = 0; 
// while (counter < days2.length) {  
// 	console.log(days2[counter]);  
// 	counter++; 
// }

for(var i = 0; i < days2.length; i++) //i keeps the index of the array at the moment of the loop
{
    console.log(days2[i]);
}

for(var i = days2.length - 1; i >= 0; i--)
{
    console.log(days2[i]);
}

//Exercise 1
//expected [15, -22, 47,100]

let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null,100,];
// let arr2 = [];

// function moveItem(index)
// {
//     arr2.push(arr[index]);
// }

// for(let i = 0, ilen = arr.length; i < ilen; i++)
// {
//     if(Number.isInteger(arr[i]) && arr[i] !== 0)
//     moveItem(i);
// }

// console.log(arr2);

//Filter
let arr2 = arr.filter(function (item, i){
    if(Number.isInteger(arr[i]) && arr[i] !== 0)
    return arr[i]; 
    /*
    if(Number.isInteger(item) && item !== 0)
    return item; 
     */
});

let arr3 = arr.map(function(item, i){
    if(Number.isInteger(arr[i]) && arr[i] !== 0)
    return arr[i]; 
});

console.log(arr2.sort());

//Exercise 2

let arr4 = [1, 200, 4, 201, 5, 400, 0, 1000, 2000, 5];

let tmp = 0;
arr4.map(function(item, i){
    if(tmp < item)
    tmp = item;
    if(i === arr4.length -1)
    console.log(tmp);
})
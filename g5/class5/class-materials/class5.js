
//1.Create array with 100 elements , each element should have a value 
//incremented by 1 from previous one.
//[1,2,3,4, ...100];
//Array.fill(100);

let arr = [];
for(let i = 1; i<= 100; i++)
{
    arr.push(i);
}
console.log(arr);

//2. Create function that calculate factorial of 9 n! = n * n-1 * n-2 .....
// 3! = 6, 5! = 120, 0! = 1...

function factorial(n)
{
    return (n != 1) ? n * factorial(n -1 ) : 1;
}

console.log(factorial(5), factorial(9));

//Student exercise 3 (Class4)

let sum = 0;
for(let i = 101; i <= 150; i++)
{
    sum = sum + Math.pow(i, 2);
}

console.log(sum);

//Student exercise 4 (Class 4)

function intToDigits(n)
{
    let digits = n.toString().split(""); //["5", "0", "4"];
    console.log(digits.length); //3
    digits.map(function(digit, index){
        console.log(digit)
    });
}

intToDigits(504);

//Swap variable values a = b, b = a
// a = 10, b = 5

var a = 10;
var b = 5;

a = a + b; //15
b = a - b; //10
a = a - b; //5


// let a = [1,2,3,4,5,6,7,8,9,10];

//Return every element which value is bigger than 5
let a = [1,2,3,4,5,6,7,8,9,10];
let tmp = [];

for(let i = 0; i < a.length; i++)
{
    let item = a[i];
    if(item > 5)
    tmp.push(item);
}
// [6,7,8,9,10];

tmp = a.filter(function(item, i){ item > 5 });

tmp = a.map(function(item, i){
    if(item > 5)
    return item;
})

a.map(function(item, i){
    if(item > 5)
    a[i] = a[i] + 10;
})

// [1,2,3,4,5, 16,17,18,19,20];


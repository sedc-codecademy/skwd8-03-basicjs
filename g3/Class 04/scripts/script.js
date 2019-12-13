// Exercise #1

// gets an array of numbers(<from>-<to>)
function getNumbers(start, end) {
  const numbers = [];
  for (let i = start; i <= end; i++) {
   numbers.push(i);
  }
  return numbers;
}

const arrNumbers = getNumbers(101, 150);

// calculates a sum of each number in an array(arr parameter) on exponent(exponent parameter) 
function calcSumExponent(arr, exponent = 2) {
  let sum = 0;
  let i = 0;
  while(i < arr.length) {
    //sum += (arr[i] * arr[i]);
    sum += Math.pow(arr[i], exponent);
    i++;
  }
  return sum;
}

console.log(calcSumExponent(arrNumbers)); // prints the sum











// do-while example
let numbersCount = prompt("How many numbers do you want to enter?")
let counter = 0
do {
  let numInput
  if(parseInt(numbersCount) <= 0) {
    numInput = prompt(`You must enter atleast one number!`)
    console.log(numInput)
    // no need to incement counter at this point since numbersCount is lower or equal to 0, you can figure out why :)
  }
  else {
    numInput = prompt(`Enter the ${counter + 1} number`)
    console.log(numInput)
    counter++
  }
} while(counter < parseInt(numbersCount))













// for-of example
let arr = [2,3,6]

for (const number of arr) {
  console.log(number)
}

// exactly the same as for-of loop
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}













// Excercise #3
// a function that generates a string message of calculated time in H:M:S format
function calculateTime(sec) {
  let hours = Math.floor((sec / 60) / 60)
  let minutes = Math.floor((sec - (hours * 60 * 60)) / 60)
  let seconds = sec - ((hours * 60 * 60) + (minutes * 60))

  return `Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`
}

let message = calculateTime(56894)

// we can reuse that same message on multiple functionalities and places
alert(message)
console.log(message)
document.write(message)

// Excercise #2 is for homework
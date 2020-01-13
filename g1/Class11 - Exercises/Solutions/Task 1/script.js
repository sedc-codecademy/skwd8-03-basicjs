// Create a function that will take a number as parameter and print in console all the numbers to that number
// if the number is divisible by 3 instead of the number print Fizz
// if the number is divisible by 5 instead of the number print Buzz
// if the number is divisible by 3 and divisible by 5 instead of the number print FizzBuzz


let inputTag = document.getElementById("inputNumber");

function fizzBuzz(number) {
    for (let i = 1; i < number; i++) {
        
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
            continue;
        }

        if (i % 5 === 0) {
            console.log('Buzz');
            continue;
        }

        if (i % 3 === 0) {
            console.log('Fizz')
            continue;
        }

        console.log(i);
    }
    console.log('end');
}

document
    .getElementById("fizzBuzz")
    .addEventListener('click', function () {
        let input = inputTag.value;
        fizzBuzz(input);
        inputTag.innerText = 0;
    });
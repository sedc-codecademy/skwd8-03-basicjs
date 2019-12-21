
// function charCount(char, sentence) {
//     let sentenceArray = sentence.split('');
//     let counter = 0;
//     for (let element of sentenceArray) {
//         if (element === char) {
//             counter++;
//         }
//     }
//     return counter;
// }

// let result = charCount("a", "Code academy");
// console.log(result);
// console.log(charCount("c", "Chamber of secrets"))
// console.log(charCount("b", "big fat bubble"))


// Task 4: Amplify the Multiples of Four
function amplify(a) {
    let array = [];
    for (let i = 1; i <= a; i++) {
       
        if (i % 4 === 0) {
            array.push(i * 10)
            continue;
        }
        array.push(i);
    }
    return array;
}

// console.log(amplify(4));
// console.log(amplify(3));
// console.log(amplify(25));

// TASK 1
// function filterArray(array) {
//     let arrayNew = [];
//     for (let element of array) {
//         if (typeof (element) === `number` && element >= 0) {
//             arrayNew.push(element);
//         }
//     }
//     return arrayNew;
// }

console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));


// Task 2: Absolute Sum

function getAbsSum(array) {
    let sum = 0;
    for (let number of array) {
        sum += Math.abs(number)
    }
    return sum;

}
// console.log(getAbsSum([2, -1, 4, 8, 10]));
// console.log(getAbsSum([-3, -4, -10, -2, -3]));
// console.log(getAbsSum([2, 4, 6, 8, 10]));
// console.log(getAbsSum([-1]));

// Task 3: Secret Society
function societyName(array) {
    let seceretSociety = ``;
    for (let i = 0; i < array.length; i++) {
        // let firstLetter = array[i][0];
        let firstLetter = array[i].charAt(0);
        seceretSociety += firstLetter;
    }
    return seceretSociety;
}


// console.log(societyName(["Adam", "Sarah", "Malcolm"]));
// console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));
// console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));


// Task 5: How Many Vowels?
// Vowels a,e,i,o,u
function countVowels(mystring) {
    let arr5 = mystring.split('')
    let counter = 0
    for (let item of arr5) {
        switch (item.toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                counter++
                break
            default:
                break;
        }

    }
    return counter

}

// console.log(countVowels("Celebration"))
// console.log(countVowels("Palm"))
// console.log(countVowels("Prediction"))


// Task 6: Word Endings

function addEnding(array, str) {
    let arr = [];
    for (let element of array) {
        let newStr = element + str;
        // let newStr = element.concat(str);
        // let newStr = `${element}${str}`;
        arr.push(newStr) 
    }
    return arr;
}

// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
// console.log(addEnding(["new", "pander", "scoop"], "er"));
// console.log(addEnding(["bend", "sharpen", "mean"], "ing"));


// Task 7: Palindrome?

function checkPalindrome(str) {
    let arr = str.split('');
    let newStr = '';
    for (let i = arr.length -1; i >= 0; i--){
        newStr += arr[i]; 
    }
    return str === newStr;
}

// console.log(checkPalindrome("mom"));
// console.log(checkPalindrome("scary"));
// console.log(checkPalindrome("reviver"));
// console.log(checkPalindrome("stressed"));

// Task 8: Leap Years

function isLeap(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    return false;
      
}

// console.log(isLeap(2020));
// console.log(isLeap(1800));
// console.log(isLeap(2000));
// console.log(isLeap(2019));

// Task 9: Product of All Odd Integers

function oddProduct(array) {
    let product = 1;
    for (let element of array) {
        if (element % 2 !== 0) {
            product *= element;
        }
    }
    return product;
}

// console.log(oddProduct([3, 4, 1, 1, 5]));
// console.log(oddProduct([5, 5, 8, 2, 4, 32]));
// console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]));


// Task 10: Filter by Digit Length

function filterDigitLength(array, number) {
    let newArr = [];
    for (let element of array) {
        let lengthOfNumber = element.toString().length;
        if (lengthOfNumber === number) {
            newArr.push(element);
        }
    }
    return newArr;
}

// let filterDigitLength = (array, number) =>
//     array.filter(element => element.toString().length === number);

// console.log(filterDigitLength([88, 232, 4, 9721, 555], 3));
// console.log(filterDigitLength([2, 7, 8, 9, 1012], 1));
// console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1));
// console.log(filterDigitLength([5, 6, 8, 9], 1));


// Task 11: Retrieve the Last N Elements

function last(array, number) {
    if (array.length < number) {
        return 'invalid';
    }

    let newArr = [];
    let startIndex = array.length - number;

    while (startIndex < array.length) {
        newArr.push(array[startIndex]);
        startIndex++;
    }
    return newArr;
}


// console.log(last([1, 2, 3, 4, 5], 1));
// console.log(last([4, 3, 9, 9, 7, 6], 3));
// console.log(last([1, 2, 3, 4, 5], 7));
// console.log(last([1, 2, 3, 4, 5], 0));

// Task 11: Mirror Array part 2

function mirror(array) {
    for (let i = array.length - 1; i >= 0; i--){
        if (array.length - 1 === i) {
            continue;
        }
        array.push(array[i]);
    }
    return array;
}

// console.log(mirror([0, 2, 4, 6])); //➞ [0, 2, 4, 6, 4, 2, 0]
// console.log(mirror([1, 2, 3, 4, 5])); //➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
// console.log(mirror([3, 5, 6, 7, 8])); //➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
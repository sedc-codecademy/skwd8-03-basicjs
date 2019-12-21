// Task 00:

function charCount(char, sentence) {
    const arrayOfChars = sentence.split("");
    let counter = 0;
    for (const character of arrayOfChars) {
        if (character === char) {
            counter++;
        }
    }
    return counter;
}

// console.log(charCount("a", "Code academy"));
// console.log(charCount("c", "Chamber of secrets"));
// console.log(charCount("b", "big fat bubble"));


// Task 01:

// function filterArray(arr) {
//     const cleanArray = [];
//     for (const item of arr) {
//         if (typeof (item) !== 'string') {
//             cleanArray.push(item);
//         }
//     }
//     return cleanArray;
// }

// console.log(filterArray([1, 2, "a", "b"]));
// console.log(filterArray([1, "a", "b", 0, 15]));
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]));


// Task 02:

function getAbsSum(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += Math.abs(item);
    }
    return sum;
}

// console.log(getAbsSum([2, -1, 4, 8, 10]));
// console.log(getAbsSum([-3, -4, -10, -2, -3]));
// console.log(getAbsSum([2, 4, 6, 8, 10]));
// console.log(getAbsSum([-1]));

// Task 03:

function societyName(arr) {
    let name = '';
    for (const item of arr) {
        name += item.charAt(0);
    }
    return name;
}


// console.log(societyName(["Adam", "Sarah", "Malcolm"]));
// console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));
// console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));


// Task 04:

// function amplify(number) {
//     const amplifiedArray = [];
//     for (let index = 0; index <= number; index++) {
//         if (index % 4 == 0) {
//             let amplifiedNumber = index * 10;
//             amplifiedArray.push(amplifiedNumber);
//             continue;
//         }
//         amplifiedArray.push(index);
//     }
//     return amplifiedArray;
// }


// console.log(amplify(4));
// console.log(amplify(3));
// console.log(amplify(25));

// Task 05:

function countVowels(sentence) {
    const sentenceArray = sentence.toLowerCase().split('');
    let counter = 0;
    for (const char of sentenceArray) {
        switch (char) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                counter++;
                break;
            default:
                break;
        }
    }
    return counter;
}


// console.log(countVowels("Celebration"));
// console.log(countVowels("Palm"));
// console.log(countVowels("Prediction"));

//  Task 06:


function addEnding(array, wordEnding) {
    const modifiedArray = [];
    for (const item of array) {
        modifiedArray.push(`${item}${wordEnding}`);
    }
    return modifiedArray;
}


// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
// console.log(addEnding(["new", "pander", "scoop"], "er"));
// console.log(addEnding(["bend", "sharpen", "mean"], "ing"));


// Task 07:


function checkPalindrome(word) {
    const charArray = word.split('');
    const charArrayReverse = [];
    for (const character of charArray) {
        charArrayReverse.unshift(character);
    }
    let wordBackwards = '';
    for (const char of charArrayReverse) {
        wordBackwards += char;
    }
    return word === wordBackwards
}


// console.log(checkPalindrome("mom"));
// console.log(checkPalindrome("scary"));
// console.log(checkPalindrome("reviver"));
// console.log(checkPalindrome("stressed"));


// Task 08:

function isLeap(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else {
        return false;
    }
}



// console.log(isLeap(2020));
// console.log(isLeap(1800));
// console.log(isLeap(2000));
// console.log(isLeap(2019));

// Task 09:


function oddProduct(array) {
    let sum = 1;
    let counter = 0;
    while (counter < array.length) {
        if (array[counter] % 2 !== 0) {
            sum *= array[counter];
        }
        counter++;
    }
    return sum;
}


// console.log(oddProduct([3, 4, 1, 1, 5]));
// console.log(oddProduct([5, 5, 8, 2, 4, 32]));
// console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]));


// Task 10:

function filterDigitLength(array, digitLength) {
    const filteredArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.toString().length === digitLength) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}


// console.log(filterDigitLength([88, 232, 4, 9721, 555], 3));
// console.log(filterDigitLength([2, 7, 8, 9, 1012], 1));
// console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1));
// console.log(filterDigitLength([5, 6, 8, 9], 1));


// Task 11:


function last(array, lastNElements) {
    if (array.length <= lastNElements) {
        return 'invalid';
    }
    let startIndex = (array.length - lastNElements);
    const fileredArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (index === startIndex) {
            fileredArray.push(element);
            startIndex++;
        }
    }
    return fileredArray;
}


// console.log(last([1, 2, 3, 4, 5], 1));
// console.log(last([4, 3, 9, 9, 7, 6], 3));
// console.log(last([1, 2, 3, 4, 5], 7));
// console.log(last([1, 2, 3, 4, 5], 0));


// Task 11:


function mirror(array) {
    for (let index = array.length - 1; index >= 0; index--) {
        const element = array[index];
        if (index === array.length - 1) {
            continue;
        }
        array.push(element);
    }
    return array;
}

// console.log(mirror([0, 2, 4, 6]));
// console.log(mirror([1, 2, 3, 4, 5]));
// console.log(mirror([3, 5, 6, 7, 8]));
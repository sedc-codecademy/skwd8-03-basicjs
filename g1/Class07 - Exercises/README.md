# Exercises

# Task 0: Count Instances of a Character in a String
Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string.
### Examples
```sh
charCount("a", "Code academy") ➞ 2
charCount("c", "Chamber of secrets") ➞ 1
charCount("b", "big fat bubble") ➞ 4
```
### Notes
* Don't forget to return the result.
* Your output must be case-sensitive (see second example).
* To split string into array of characters you can use [Split]

# Task 1: Filter out Strings from an Array
Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.
### Examples
```sh
filterArray([1, 2, "a", "b"]) ➞ [1, 2]
filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
```
### Notes
* Don't forget to return the result.
* The first element in an array always has an index of 0.
* Zero is a non-negative number.


# Task 2: Absolute Sum
Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
### Examples
```sh
getAbsSum([2, -1, 4, 8, 10]) ➞ 25
getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
getAbsSum([2, 4, 6, 8, 10]) ➞ 30
getAbsSum([-1]) ➞ 1
```
### Notes
* Don't forget to return the result.
* The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).
* You can user [Math.abs] to get the absolute value.

# Task 3: Secret Society
A group of friends have decided to start a secret society. The name will be the first letter of each of their names.

Create a function that takes in an array of names and returns the name of the secret society.
### Examples
```sh
societyName(["Adam", "Sarah", "Malcolm"]) ➞ "ASM"
societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "HNLC"
societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "PCRRMJ"
```
### Notes
* The secret society's name should be entirely uppercased.
* You can get any character from string using [CharAt]

# Task 4: Amplify the Multiples of Four
In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.
### Examples
```sh
amplify(4) ➞ [1, 2, 3, 40]
// Create a sequence from 1 to 4
// 4 is exactly divisible by 4, so it will be 4*10 = 40
amplify(3) ➞ [1, 2, 3]
// Create a sequence from 1 to 3
// There are no numbers that can be exactly divided by 4
amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25
// The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.
```
### Notes
* Don't forget to return the result.
* The given parameter num will always be equal to or greater than 1.
* Remember to include the num as the higher bound of the sequence (see the Examples) above.
* A number a amplified by a factor b can also be read as: a * b.
* A number a is exactly divisible by a number b when the remainder of the division a / b is equal to 0.

# Task 5: How Many Vowels?
Create a function that takes a string and returns the number (count) of vowels contained within it.
### Examples
```sh
countVowels("Celebration") ➞ 5
countVowels("Palm") ➞ 1
countVowels("Prediction") ➞ 4
```
### Notes
* Don't forget to return the result.
* a, e, i, o, u are considered vowels (not y).
* All test cases are one word and only contain letters.
* To split string into array of characters you can use [Split]

# Task 6: Word Endings
Create a function that adds a string ending to each member in an array.
### Examples
```sh
addEnding(["clever", "meek", "hurried", "nice"], "ly")
➞ ["cleverly", "meekly", "hurriedly", "nicely"]
addEnding(["new", "pander", "scoop"], "er")
➞ ["newer", "panderer", "scooper"]
addEnding(["bend", "sharpen", "mean"], "ing")
➞ ["bending", "sharpening", "meaning"]
```
### Notes
* Don't forget to return the result.

# Task 7: Palindrome?
A palindrome is a word that is identical forward and backwards.

* mom
* racecar
* kayak

Given a word, create a function that checks whether it is a palindrome.
### Examples
```sh
checkPalindrome("mom") ➞ true
checkPalindrome("scary") ➞ false
checkPalindrome("reviver") ➞ true
checkPalindrome("stressed") ➞ false
```
### Notes
* Don't forget to return the result.
* All test input is lower cased.

# Task 8: Leap Years
A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:

* A year must either be divisible by 400 or divisible by 4 and not 100.

Given a year you must implement a function that returns true if it's a leap year, or false if it's not.
### Examples
```sh
isLeap(2020) ➞ true
// Exactly divided by 4 and not by 100.
isLeap(1800) ➞ false
// Exactly divided by 4, but is also exactly divided by 100.
isLeap(2000) ➞ true
// Exactly divided by 400.
isLeap(2019) ➞ false
// It can't be exactly divided by 400 or by 4.
```
### Notes
* Don't forget to return the result.
* Exactly divided can be interpreted as the remainder of the division is equal to 0.

# Task 9: Product of All Odd Integers
Create a function that returns the product of all odd integers in an array.

### Examples
```sh
oddProduct([3, 4, 1, 1, 5]) ➞ 15
oddProduct([5, 5, 8, 2, 4, 32]) ➞ 25
oddProduct([1, 2, 1, 2, 1, 2, 1, 2]) ➞ 1
```
### Notes
* Don't forget to return the result.

# Task 10: Filter by Digit Length
Create a function that filters out an array to include numbers who only have a certain number of digits.
### Examples
```sh
filterDigitLength([88, 232, 4, 9721, 555], 3) ➞ [232, 555]
// Include only numbers with 3 digits.
filterDigitLength([2, 7, 8, 9, 1012], 1) ➞ [2, 7, 8, 9]
// Include only numbers with 1 digit.
filterDigitLength([32, 88, 74, 91, 300, 4050], 1) ➞ []
// No numbers with only 1 digit exist => return empty array.
filterDigitLength([5, 6, 8, 9], 1) ➞ [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.
```
### Notes
* Don't forget to return the result.
* If no numbers of the specified digit length exist, return an empty array.
* If all numbers in the array have the specified digit length, return original array.
* The sub-array returned should have the same relative order as the original array.

# Task 11: Retrieve the Last N Elements
Write a function that retrieves the last n elements from an array.
### Examples
```sh
last([1, 2, 3, 4, 5], 1) ➞ [5]
last([4, 3, 9, 9, 7, 6], 3) ➞ [9, 7, 6]
last([1, 2, 3, 4, 5], 7) ➞ "invalid"
last([1, 2, 3, 4, 5], 0) ➞ []
```
### Notes
* Don't forget to return the result.
* Return "invalid" if n exceeds the length of the array.
* Return an empty array if n == 0.

# Task 11: Mirror Array
Given an array, transform that array into a mirror.
### Examples
```sh
mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]
mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
```
### Notes
* Don't forget to return the result.
* Do not repeat the last item of the given array.

[Split]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split>
[Math.abs]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs>
[CharAt]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt>


// alert("Hello world!")

// STRING
let firstName = 'Ivo Kostovski';
// NUMBER
let age = 30;
// Boolean
let isRaining = true;
// UNDEFINED


let hairColor;
// alert(firstName);
// alert(age);
// alert(isRaining);
// alert(hairColor);
// age = "apple";
// alert(age)
// age = "It's raining";
// age = 'It's raining';
// age = `"It's raining"`;

// alert(firstName + ' is ' + age + ' old.');
// alert(`${firstName} is ${age} old.`);

// alert(11 + 1);

// alert("11a" - 1);

let a = 1;
let b = 2;

// alert(a + b);
// alert(b - a);
// alert(a * b);
// alert(b / a);
// alert(4 % 3);
// alert(++a)
// alert(--b)
// alert(a === b);
// alert(a !== b);

// EXERCISE 1

// let feetToMeters = 0.3048;
// let feet = 10;
// let result = feet * feetToMeters

// alert(result);

// let sideA = 10;
// let sideB = 20;

// let area = sideA * sideB;
// alert(area);

let classesPerSession = 4;
let sessionsPerMonth = 10;
let academyDuration = 12;
let summerVacationDuration = 1;
let sessionsPerSummerVacation = 2;

let sessionsPerFullAcademyYear = 
(academyDuration - summerVacationDuration) * (sessionsPerMonth * classesPerSession);

let summerVacationClasses = summerVacationDuration * 
(sessionsPerSummerVacation * classesPerSession);

let result = sessionsPerFullAcademyYear + summerVacationClasses;

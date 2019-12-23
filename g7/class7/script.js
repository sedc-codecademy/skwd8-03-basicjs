// Selectors
// By Id
// This always returns one element
let header1 = document.getElementById("mainTitle"); // Here we hardcode the id name
let headerId = "mainTitle";
let heade1rWithVariable = document.getElementById(headerId); // Here we use a variable for the id name
// header1 is the whole h1 element ( everything included )
// header1.innerText is the text inside of the header1 element
console.log(header1.innerText); 
console.log(heade1rWithVariable.innerText);

// By Class name
// This always returns a collection of elements
let headers2 = document.getElementsByClassName("question"); // We only have one element with this class
let paragraphs2 = document.getElementsByClassName("answer"); // We have multiple elements with this class
console.log(headers2);
console.log(paragraphs2);

headers2.innerText = "Change the text"; // Will not do anything
headers2[0].innerText = "Change the text"; // Will actually change the h2 element text
// Why? Because the first one is a collection and we can't change text to a whole collection, the second example is actually an element and we can change that

// If we want to change multiple stuff we can use a loop
// This will be commented so it will not change instantly when the page is opened
// for(let i = 0; i < paragraphs2.length; i++){
//     paragraphs2[i].innerText = "BOB"; // Everything will be BOB! 
// }

// By Tag Name
// This also always returns collection of elements 
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);
// If we want to change some element we have to get it from the collection
allParagraphs[0].innerText = "This was changed through javascript";

// Query selectors
// Query selector always returns one thing
let querySelectedId = document.querySelector("#mainTitle");
let querySelectedClass = document.querySelector(".answer");
let querySelectedTag = document.querySelector("p");
console.log(querySelectedId);
console.log(querySelectedClass);
console.log(querySelectedTag);

// Query selector all always returns collection of items
let querySelectedParagraphs = document.querySelectorAll("p");
console.log(querySelectedParagraphs);

// Looking for stuff throug the elements
// Parent Element
let parentOfAnswer = document.getElementsByClassName("answer")[0].parentElement;
console.log(parentOfAnswer); // We will get div ( the parent element of answer )
// Child Elements
let childElementsOfDiv = document.getElementsByTagName("div")[0].children;
console.log(childElementsOfDiv); // Collection of child elements of div
// Sibling Elements
let myElement = document.getElementsByClassName("answer")[1]; // second answer element
let beforeMyElement = myElement.previousElementSibling; // the previous html element on the same level ( YES! in our example )
let afterMyElement = myElement.nextElementSibling; // the next html element on the same level ( Mybe?!? in our example )
console.log(beforeMyElement);
console.log(afterMyElement);
// First and Last element
let firstElement = parentOfAnswer.firstElementChild;
let lastElement = parentOfAnswer.lastElementChild;
console.log(firstElement);
console.log(lastElement);
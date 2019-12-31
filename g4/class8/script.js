//DOM

//Selectors

//id selector - always returns one element
let myHeader = document.getElementById("myTitle");
console.log(myHeader);

//class selector - always retrun array of elements
let paragraphs = document.getElementsByClassName("myParagraph");
let secondParagraph = document.getElementsByClassName("second");
console.log(paragraphs);
console.log(secondParagraph);

//tag name selector - retrun array of elements
let paragraphTags = document.getElementsByTagName("p");
console.log(paragraphTags);

//query selectors - css like selectors
let one = document.querySelector(".myParagraph");
let meny = document.querySelectorAll(".myParagraph");
console.log(one)
console.log(meny)

//traversing trought the DOM tree

//next sibling selector
let parOne = document.querySelector(".pars");
let parOneSibling = parOne.nextElementSibling;
console.log(parOneSibling)

//previous sibling selector
let previousPar = parOneSibling.previousElementSibling;
console.log(previousPar)

//parent element selector
let parOneParent = parOne.parentElement;
console.log(parOneParent);

let parentDiv = document.getElementById("parent");

//first child selector
let firstChild = parentDiv.firstElementChild;
console.log(firstChild)

//last child selector
let lastChild = parentDiv.lastElementChild;
console.log(lastChild)

//reading the text inside the HTML elements
let title = document.getElementById("myTitle");

//takes the text of the text nodes inlucing the whie spaces and the beguining and the end
console.log(title.textContent);

//takes the taxt in the text nodes without the white spaces
console.log(title.innerText);

//takes the whole HTML nested inside the HTML elemet
console.log(title.innerHTML);

//changing text content of an element
title.innerText = "Dynamicly changed text";

//changing the HTML of an element
let list = document.getElementById("list");

list.innerHTML += "<li>list item one</li>";
list.innerHTML += "<li>list item two</li>";
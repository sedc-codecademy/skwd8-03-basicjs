// // console.log("Test");


// ********************************* SELECTORS ***************************

let myFirstElement = document.getElementById("main");
console.log(myFirstElement);

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

let divs = document.getElementsByTagName("div");
console.log(divs);
console.log(divs[0])

let paragraphsByClassName = document.getElementsByClassName("myParagraph");
console.log(paragraphsByClassName);

let secondParagraph = document.getElementsByClassName("unique");
console.log(secondParagraph);

let myHeaderTag = document.querySelector("h1");
let myHeaderId = document.querySelector("#myTitle");
console.log(myHeaderTag);
console.log(myHeaderId);


let allHeaders = document.querySelectorAll("h1");
let allParagraphs = document.querySelectorAll("p");
console.log(allHeaders[0]);
console.log(allParagraphs);


// ********************************** Traversing through DOM tree *************************

let myHeader = document.getElementById("myTitle");
let sibling = myHeader.nextElementSibling;
console.log("My header", myHeader);

console.log("First sibling", sibling);

let firstDiv = document.getElementById("main");
let divSibling = firstDiv.nextElementSibling;
let divSiblingChild = divSibling.firstElementChild;

let elementToFind = document.getElementById("main").nextElementSibling.firstElementChild;
console.log(firstDiv);
console.log(divSibling);
console.log(divSiblingChild);
console.log(elementToFind);


let parent = firstDiv.parentElement;
console.log(parent);

let secondParent = divSiblingChild.parentElement.parentElement.parentElement;
console.log(secondParent);

let allChildren = firstDiv.children;
let firstChild = firstDiv.firstElementChild;
let lastChild = firstDiv.lastElementChild;

let test = firstChild.nextElementSibling;

console.log(allChildren);
console.log(firstChild);
console.log(lastChild);
console.log(test);


// ********************************** Change text node content *************************

let firstHeader = document.getElementById("myTitle");
console.log(firstHeader.innerText);

setTimeout(function(){
    firstHeader.innerText = "Noo, not so cool page!";
    setTimeout(function(){
        firstHeader.innerText = "I am joking, still cool page";

    }, 1000);
}, 2000);

firstHeader.innerText = "<p>Hello I am p element</p>"

firstHeader.innerHTML += "<p class = 'myParagraph'>Yeah, really nice page!</p>";




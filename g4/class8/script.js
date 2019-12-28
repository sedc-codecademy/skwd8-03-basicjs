let myHeader = document.getElementById("myTitle");

// console.log(myHeader);
// console.log(myHeader.innerText);

let paragraphs = document.getElementsByClassName("myParagraph");
let secondParagraph = document.getElementsByClassName("second");

// console.log(paragraphs);
// console.log(secondParagraph);
// console.log(paragraphs[1].innerText)

let paragraphTags = document.getElementsByTagName("p");

let one = document.querySelector(".myParagraph");
let meny = document.querySelectorAll(".myParagraph");

// console.log(one)
// console.log(meny)


let secondElement = paragraphs[1];

console.log(secondElement.previousElementSibling    );

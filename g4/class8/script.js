// let myHeader = document.getElementById("myTitle");

// // console.log(myHeader);
// // console.log(myHeader.innerText);

// let paragraphs = document.getElementsByClassName("myParagraph");
// let secondParagraph = document.getElementsByClassName("second");

// console.log(paragraphs);
// console.log(secondParagraph);
// console.log(paragraphs[1].innerText)

// let paragraphTags = document.getElementsByTagName("p");

// let one = document.querySelector(".myParagraph");
// let meny = document.querySelectorAll(".myParagraph");

// // console.log(one)
// // console.log(meny)

// let parOne = document.querySelector(".pars");
// let parOneSibling = parOne.nextElementSibling;

// console.log(parOneSibling)

// let previousPar = parOneSibling.previousElementSibling;
// console.log(previousPar)

// let parOneParent = parOne.parentElement;
// console.log(parOneParent);

// let parentDiv = document.getElementById("parent");

// let firstChild = parentDiv.firstElementChild;
// console.log(firstChild)

// let lastChild = parentDiv.lastElementChild;
// console.log(lastChild)


// // changing dom

// let title = document.getElementById("myTitle");

// // console.log(title.textContent);
// // console.log(title.innerText);
// // console.log(title.innerHTML)

// title.innerText = "Dynamicly changed text";

// let list = document.getElementById("list");

// list.innerHTML += "<li>list item one</li>";
// list.innerHTML += "<li>list item two</li>";

let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

let app = document.getElementById("app");
let title = app.firstElementChild;
let content = document.getElementById("content");


function printGrades(subjects, grades, element) {
    // element.innerHTML = "";

    element.innerHTML = "<ul id='tempUL'></ul>";
    let tempUl = document.getElementById("tempUL");

    for(let i = 0; i < subjects.length; i++) {
        tempUl.innerHTML += `<li>${subjects[i]} : ${grades[i]}</li>`;
    }

    //element.innerHTML += "</ul>";
}

printGrades(subjects, grades, title);
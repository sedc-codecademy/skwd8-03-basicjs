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
let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

let app = document.getElementById("app");
let title = app.firstElementChild;
let content = document.getElementById("content");

function printGrades(subjects, grades, element) {

    element.innerHTML = "<ul id='tempUL'></ul>";

    let tempUl = document.getElementById("tempUL");
    for(let i = 0; i < subjects.length; i++) {
        tempUl.innerHTML += `<li>${subjects[i]} : ${grades[i]}</li>`;
    }

}

function printStudents(students, element) {
    element.innerHTML = "<ol id='tempOL'></ol>";

    let tempOl = document.getElementById("tempOL");

    for(let student of students) {
        tempOl.innerHTML += `<li>${student}</li>`;
    }
} 

function academyPanel(person, name) {

    if(person === "student" && person.length > 3) {
        title.innerHTML = "";
        title.innerHTML += `<p>Hello ${name}</p>`;
        title.innerHTML += `<p>Welcome to your student page, here are yout grades:</p>`;
        printGrades(subjects, grades, content);
    } else if (person === "teacher" && person.length > 3) {
        title.innerHTML = "";
        title.innerHTML += `<p>Hello ${name}</p>`;
        title.innerHTML += `<p>Welcome to your teacher page, here are your students:</p>`;
        printStudents(students, content);
    } else {
        title.innerHTML = "error";
        content.innerHTML = "invalid input";
    }

}

academyPanel("teacher", "Kristina");

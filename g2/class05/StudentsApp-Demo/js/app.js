
let myApp = document.getElementById("app");
let titleDiv = myApp.firstElementChild;
let contentDiv = myApp.children[1];

let students = ["Dejan Jovanov", "Martin Panovski", "John Doe", "Bob Bobsky", "Jill Jilsky"];
let subjects = ["Math", "English", "Science", "Sport", "JavaScript"];
let grades = ["A", "B", "C", "A", "B"];

function printGrades(subjects, grades, element){
    element.innerHTML = "";
    element.innerHTML += "<ul>";
    for(let i = 0; i < subjects.length; i++){
        element.innerHTML += `<li>${subjects[i]} - ${grades[i]}</li>`
    }
    element.innerHTML += "</ul>";
}

function printStudents(students, element){
    element.innerHTML = "";
    element.innerHTML += "<ol>";
    for (let i = 0; i < students.length; i++) {
        element.innerHTML += `<li>${students[i]}</li>`
    }
    element.innerHTML += "</ol>";
}


function academyPanel(role, name){
    if(role.toLowerCase() === "teacher"){
        titleDiv.innerHTML = "";
        titleDiv.innerHTML +=  `<h1>Hello ${name}!</h1>`;
        titleDiv.innerHTML += `<p>Welcome to your teacher page!</p>`;
        titleDiv.innerHTML += "<h3>Here are your students:</h3>";
        printStudents(students, contentDiv);
    }
    else if(role.toLowerCase() === "student"){
        titleDiv.innerHTML = "";
        titleDiv.innerHTML +=  `<h1>Hello ${name}!</h1>`; 
        titleDiv.innerHTML += `<p>Welcome to your page!</p>`;
        titleDiv.innerHTML += "<h3>Here are your grades:</h3>";
        printGrades(subjects, grades, contentDiv);
    }
}

let userRole = prompt("Please enter your role!");
let userName = prompt("Please enter your name!");

academyPanel(userRole, userName);
var appDiv = document.getElementById("app"); //Get div id="app"
var firstChild = appDiv.firstElementChild;
var contentDiv = appDiv.children[1]; //[div.title, div.content...]

let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

function fillGrades(students, subjects, grades)
{
    let ul = document.createElement('ul');

    for(let i = 0; i < students.length; i++)
    {
        let li = document.createElement('li');
        li.innerText = `Student: ${students[i]} has passed class: ${subjects[i]} with grade: ${grades[i]}`;
        ul.appendChild(li);
    }

    contentDiv.appendChild(ul);
}

//fillGrades(students, subjects, grades);

function academyPanel(type, name)
{
    contentDiv.innerHTML = '';
    
    if(type === 'student' && name.length >= 2)
    {
        //Find student from studens array by its name
        //Once you find index (array index) of that student
        //Get its subject and grade from the arrays and display it on screen
        let index;
        let foundStudents = students.filter((studentName, i) =>
                     studentName.match(name) ? index = i : false);
                   
        console.log(foundStudents, index);
        let h1 = document.createElement('h1');
        h1.innerText = `Welcome ${foundStudents.join("")}, here are your grades` ;
        let p = document.createElement('p');
        p.innerText = `You have passed ${subjects[index]} with ${grades[index]} `;

        contentDiv.appendChild(h1);
        contentDiv.appendChild(p);

    }
    else if(type === 'teacher')
    {
        let h1 = document.createElement('h1');
        h1.innerText = `Welcome ${name} here is the list of students:`;
        contentDiv.appendChild(h1);
        fillGrades(students, subjects, grades);
    }
    else
    {
        console.log('Inavlid login');
        let h1 = document.createElement('h1');
        h1.innerText = 'Invalid access; try again';
        contentDiv.innerHTML = h1;
    }
}

academyPanel('teacher', 'Igor');
academyPanel('student', 'Jo');

console.log(students.concat(grades));
console.log(students.join(","));
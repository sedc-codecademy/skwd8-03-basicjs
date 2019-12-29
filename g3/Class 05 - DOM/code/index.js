// Bad use of functions
function pecatiPet() {
  console.log(5)
}
function pecatiCetiriPlusDva() {
  console.log(4 + 2)
}
pecatiPet()
// ... code
// ... code
pecatiCetiriPlusDva()
// ... code
// ... code
pecatiPet()


// Good use of functions, the logic in the function should not depend on the context
function pecati(what) {
  let result = `this text is coming from "pecati" function: ${what}`
  return result
}

// This is why it is good to return a value from a function, we can reuse that value in different places
console.log(`This is for developers: ${Date.now()} ${pecati(7)}`);
alert(pecati("dejan"))
document.write(pecati(null))

// Teacher/Student Example
// Good logic, but bad structure
let person = prompt("What are you, teacher or student?");
let name = prompt("Enter your name:");

let title = document.getElementById("title");
let content = document.getElementById("content");

let teachers = ["Dejan", "Vukashin"];
let subjects = ["Math", "Science", "Physics"];
let students = ["Marin", "Goran", "Milan", "Dejan"];
let grades = ["A", "B", "F"];

// if(person.toLowerCase() === "teacher") {
//   for(let i = 0; i < teachers.length; i++) {
//     if(teachers[i].toLowerCase() === name.toLowerCase()) {
//       content.innerHTML = "<ul>"
//       for (const student of students) {
//         content.innerHTML += `<li>${student}</li>`
//       }
//       content.innerHTML += "</ul>"

//       content.innerHTML += "<ul>"
//       for (const subject of subjects) {
//         content.innerHTML += `<li>${subject}</li>`
//       }
//       content.innerHTML += "</ul>"
//     }
//   }
// } else if(person.toLowerCase() === "student") {
//   for(let i = 0; i < students.length; i++) {
//     if(students[i].toLowerCase() === name.toLowerCase()) {
//       content.innerHTML = "<ul>"
//       for (const grade of grades) {
//         content.innerHTML += `<li>${grades}</li>`
//       }
//       content.innerHTML += "</ul>"
//     }
//   }
// } else {
//   console.log('I don\'t know what ' + '"' + person + '"' + ' is!');
// }

if(person.toLowerCase() === "teacher") {
  for(let i = 0; i < teachers.length; i++) {
    if(teachers[i].toLowerCase() === name.toLowerCase()) {
      let studentsContent = document.createElement("ul");
      let subjectsContent = document.createElement("ul");
      for (const student of students) {
        let li = document.createElement("li");
        li.textContent = student;
        studentsContent.append(li);
      }
      for (const subject of subjects) {
        let li = document.createElement("li");
        li.textContent = subject;
        subjectsContent.append(li);
      }

      title.textContent = name;
      content.append(studentsContent);
      content.append(subjectsContent);
    }
  }
} else if(person.toLowerCase() === "student") {
  for(let i = 0; i < students.length; i++) {
    if(students[i].toLowerCase() === name.toLowerCase()) {
      let gradesContent = document.createElement("ul");
      for (const grade of grades) {
        let li = document.createElement("li");
        li.textContent = grade;
        gradesContent.append(li);
      }

      title.textContent = name;
      content.append(gradesContent);
    }
  }
} else {
  console.log(`I don't know what "${person}" is!`);
}

// Teacher/Student Example Refactored
// Same, but with good structure
function academyPanel(person, name) {
  // These arrays should come from a database, in this case we have them hard-coded since this is an example and the main focus is on the logic of the DOM.
  // This is the place where we get these informations if there was a database
  let teachers = ["Dejan", "Vukashin"];
  let subjects = ["Math", "Science", "Physics"];
  let students = ["Marin", "Goran", "Milan", "Dejan"];
  let grades = ["A", "B", "F"];

  // Selecting an already existing elements in the HTML document
  let titleNode = document.getElementById("title")
  let contentNode = document.getElementById("content")

  if(person === "teacher") {
    if(checkIfElExistsInArr(name, teachers)) {
      renderElement(name, titleNode)
      renderElement(getUlFromArray(students), contentNode)
    }
  } else if(person === "student") {
    if(checkIfElExistsInArr(name, students)) {
      renderElement(name, titleNode)
      renderElement(getUlFromArray(subjects), contentNode)
      renderElement(getUlFromArray(grades), contentNode)
    }
  } else {
    renderElement(name, titleNode)
    renderElement(`I don't know what "${person}" is!`, contentNode)
  }
}

// Should render an element as a child in "parentEl"
function renderElement(element, parentEl) {
  // Checking if the element is string, then it will add it as a text in the parent element
  if(typeof element === "string") {
    parentEl.textContent = element
  } else {
    // If the element is an HTMLObject(not a string) then it uses the append() function to adds the element as a child to the parent
    parentEl.append(element)
  }
}

// Generates ul(Unordered List) element(Node) and adds each item in the array as li(List Item) elements
function getUlFromArray(arr) {
  // createElement() generates HTML element, but it's not drawn(rendered) in the HTML document unless we tell it(append it) where to be drawn(rendered)
  let ul = document.createElement("ul")
  for (const arrEl of arr) {
    let li = document.createElement("li");
    li.textContent = arrEl.toString();
    ul.append(li);
  }
  return ul;
}

// Simply checks if the element exists in the given array, it returns a boolean(true/false) value
function checkIfElExistsInArr(element, arr) {
  for (const arrEl of arr) {
    if(element.toLowerCase() === arrEl.toLowerCase()) {
      return true;
    }
  }
  return false;
}

let personInput = prompt("What are you, teacher or student?");
let nameInput = prompt("Enter your name:");
// We call only academyPanel(), and that's it
academyPanel(personInput, nameInput)
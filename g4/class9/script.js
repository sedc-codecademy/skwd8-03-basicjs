let button = document.getElementById("button");

function enevtFunction() {
    alert("Event is triggered!");
}

button.addEventListener("click", function() {
    alert("Event is triggered!");
});

let input = document.getElementById("input");
let button = document.getElementById("button");
let check = document.getElementById("check");
let list = document.getElementById("list");
let pars = document.getElementById("pars");

let names = [];

function addStudentsInToTheDatabase() {
    names.push(input.value);
    renderElements();
}

function renderElements() {
    list.innerHTML = "";
    for(let item of names) {
        list.innerHTML += `<li>${item}</li>`;
    }
}

button.addEventListener("click", addStudentsInToTheDatabase);

check.addEventListener("click", function() {
    console.log(names);
})

// let int1 = parseInt(prompt("num1"));
// let int2 = parseInt(prompt("num2"));

function sum(int1, int2) {
    console.log(int1 + int2);
}

function func1() {
    sum(int1, int2)
}

pars.addEventListener("click", func1)

document.getElementById("male");

male.addEventListener("click", function() {
    console.log(document.getElementById("male").value)
});
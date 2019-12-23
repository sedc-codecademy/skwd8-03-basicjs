// Event with anonymus func

// let button = document.getElementById('button');

// button.addEventListener('click', function() {
//     console.log('Our first event trigered!')
// });

// event with function reference

// WRONG
// button.addEventListener('click', alerSomething())
// RIGHT
// button.addEventListener('click', alerSomething)

// function alerSomething() {
//     alert('Something');
// }

// let title = document.getElementById('title');

// button.addEventListener('click', function() {
//     title.innerText += ' !New text! '
// })

let title = document.getElementById('title');

let orderedList =
document.getElementById('list-of-animals');

let btnListAnimals =
document.getElementById('list-animals');

let btnAddAnimal =
document.getElementById('add-animal');

let listOfAnimals = ['Dog', 'Cat', 'Wolf'];

// FUNCTIIONS

function listAnimalsInTheJungle(htmlElement, arr) {
    htmlElement.innerHTML = '';
    for(let item of arr) {
        htmlElement.innerHTML += `<li>${item}</li>`;
    }
}

function addAnimal() {
    let input = prompt('Please enter a new animal');
    for (let animal of listOfAnimals) {
        if (animal === input) {
            input = prompt('Please enter a new animal');
        }
    }
    listOfAnimals.push(input);
    listAnimalsInTheJungle(orderedList, listOfAnimals);
}

// EVENTS

btnListAnimals.addEventListener('click', function() {
    listAnimalsInTheJungle(orderedList, listOfAnimals);
})

btnAddAnimal.addEventListener('click', addAnimal);
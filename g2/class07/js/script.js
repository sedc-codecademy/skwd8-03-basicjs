// // let width = document.getElementById("width");
// // let height = document.getElementById("height");

// // window.addEventListener("resize", function() {
// //     let widthValue = window.innerWidth;
// //     let heightValue = window.innerHeight;

// //     width.innerText = "Width: " + widthValue;
// //     height.innerText = "Height: " + heightValue;
// // });

// // window.onabort = function (event) {

// // }


// // Litteral Notation (Object litteral)
// let hotel2 = {}; //empty object

// let person = {
//     firstName: "Martin",
//     lastName: "Panovski",
//     age: 26,
//     hobbies: ["Swimming", "Talking", "Running"],
//     isLazy: false,

//     getFullName: function () {
//         return this.firstName + " " + this.lastName;
//     },

//     showHobbies: function () {
//         for (let i = 0; i < this.hobbies.length; i++) {
//             console.log(this.hobbies[i]);
//         }
//     }
// }

// person.height = 190;
// person.getHeight = function () {
//     //some code..
// }

// console.log(person);
// console.log(person.firstName);
// console.log(person.isLazy);
// console.log(person.hobbies);

// person.showHobbies();

// //Object Notation
// let hotel = new Object();
// // let hotel1 = new Object();

// hotel.name = "Hilton";
// hotel.rooms = 200;
// hotel.booked = 149;
// hotel.checkAvailability = function () {
//     return this.rooms - this.booked;
// };

// console.log(hotel);

// //Deleting properties or methods
// delete hotel.name;
// delete hotel.checkAvailability;
// console.log(hotel);




// person.firstName = "Dejan";
// person.lastName = "Jovanov";
// person.age = 27;
// person.hobbies = ["Football", "Basketball"];
// person.height = 192;

// console.log(person);



// // Constructor Function

// function Person(firstName, lastName, age) {

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;

//     this.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// // Create constructor function for Car. Add the following properties
// //Model, Manufacturer, Color, yearOfProduction, fuel, consumption

// //calculateFuelConsumption()



// let test = this.innerHeight;
// console.log(test);
// Object();
// let martin = new Person("Martin", "Panovski", 26);
// let dejan = new Person("Dejan", "Jovanov", 27);
// let bob = new Person("Bob", "Bobsky", 28);

// bob.height = 100;

// console.log(martin);
// console.log(dejan);
// console.log(bob);

let students = [];

let registerBtn = document.getElementById("registerBtn");
let firstNameElement = document.getElementById("fName");
let lastNameElement = document.getElementById("lName");
let ageElement = document.getElementById("age");
let registerBtnElement = document.getElementById("registerBtn");
let formElement = document.getElementById("studentsForm");

registerBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let student = new Person(firstNameElement.value, lastNameElement.value, ageElement.value);
    students.push(student);
    console.log(students);
    clearInputs();
});

function clearInputs() {
    firstNameElement.value = "";
    lastNameElement.value = "";
    ageElement.value = "";
}


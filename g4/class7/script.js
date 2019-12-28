// let array = new Array();
// console.log(array)
// //observe the array object in the console

// //objects

// //LITERAL NOTATION
// let car = {
//     //properties
//     brand: "Audi", 
//     fuelType: "Diesel",
//     numberOfDoors: 5,
//     isNew: false,

//     //methods
//     checkIfCarIsNew: function() {
//         if(this.isNew === true) {
//            return "Buy this car!";
//         } else {
//             return "Dont buy this car!";
//         }
//     }
// }; 

// //acesing the property value
// let carBrand = car.brand;
// console.log(carBrand);

// //invoking the object method
// let shoudIBuyThisCar = car.checkIfCarIsNew();
// console.log(shoudIBuyThisCar);

// //changing the property value 
// car.brand = "BMW";
// console.log(car.brand);

// // creating a new propery after the object was decalred
// car.model = "M5";
// console.log(car.model);

// // deleting a property
// console.log(car.numberOfDoors);
// delete car.numberOfDoors;
// console.log(car.numberOfDoors);

// //reading and changing value of a object property - another way
// let carBrand2 = car["brand"];
// car["brand"] = "Seat";

// //printing values
// console.log(`Car brand: ${car.brand}, Car model: ${car.model}`);

// //CONSTRUCTOR NOTATION

// // declaring a new variable to be an empty object
// let dog = new Object(); //{}

// // adding properties to an empty object
// dog.name = "Majlo";
// //another code
// dog.breed = "Siberian Husky";
// //another code
// dog.age = 9;
// dog.isTired = false;

// // adding methods to an empty object
// dog.bark = function() {
//     console.log("woof woof");
// }

//CONSTRUCTOR NOTATION


function Human(name, surname, age) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;

    this.getInfo = function() {
        let result = `${this.firstName} ${this.lastName}, is ${this.age} years old.`;
        return result;
    } 
}

let student1 = new Human("Viktor", "Jakovlev", 30);
let student2 = new Human("Kristina", "Spasovska", 32);

// console.log(student1.getInfo());
// console.log(student2.getInfo());

let humanDatabse = [];

function humanGenerator(name, surname, age) {
    let tempHuman = new Human(name, surname, age);
    humanDatabse.push(tempHuman);
} 

humanGenerator("Viktor", "Jakovlev", 30);
humanGenerator("Kristina", "Spasovska", 32);

//console.log(humanDatabse);

for(let item of humanDatabse) {
    console.log(item.getInfo())
}







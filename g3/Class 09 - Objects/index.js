// Hotel informations placed in an array, pretty impractical, you need to remember the indexes of all informations to know which information you want to access.
let hotelArr = [
  "Dejan", 
  40, 
  true,
  ["Dejan", "Vukashin", "Buco"],
  {
    knvie: "Oshtar",
    chief: "Igor"
  },
  function() {
    if(hotelArr[4].length > 10) {
      return true
    }
    else {
      return false
    }
  }
]
hotelArr[0]
hotelArr[1]
hotelArr[5]() // The element in index position 5 is an anonymous function, we have to call that function with () if we want to execute it


// Hotel informations placed in an object, here every information has a "name"(key, not index), easy to access
// This whay of generating objects it's called literal notation
let hotel = {
  name: "Dejan",
  rooms: 40,
  gym: true,
  employees: ["Dejan", "Vukashin", "Buco"],
  kitchen: {
    knvie: "Oshtar",
    chief: "Igor"
  },
  checkEmplyees: function() {
    if(this.employees.length > 10) { // "this" keyword refers to the "hotel" object in this case
      return true
    }
    else {
      return false
    }
  }
}
console.log(hotel)
console.log(hotel.name)
console.log(hotel.employees[0])
console.log(`Does ${hotel.name} have more than 10 emplyees: ${hotel.checkEmplyees()}`)



console.log(this) // "this" keyword in the global scope refers to the "window" object
console.log(window) // we can also access window object by its name
var dejan = 7 // a varable declared with "var" just adds another property to the "window" object(check the console.log on "window")
let vukashin = 9 // a variable declared with "let" use a different method for declaring variables

// Exercise #1
let me = {
  name: "Dejan",
  age: 23,
  hair: "plava",
  glasses: true,
  knownLanguages: ["Engish", "C#", "Javascript", "Java"],

  printInfo: function() {
    return `${this.name} ${this.age} ${this.hair}`
  }
}
function printInfo() {
  console.log(`I don't know what to print`)
}
console.log(me.printInfo())
console.log(printInfo())




// Reference type example
let obj;
console.log(obj)
obj = { // When an object is saved in a variable, it is saved as a reference to a location in memory, where the object is kept
  name: "Dejan",
  lastName: "Blazheski"
}
let obj2 = obj // obj2 and obj are two different variables that "point" to the same object in memory, this does not copy the object from obj to obj2, it just generates a different pointer to the same memory location of the object, It's like asking two different people where Skopje City Mall's location is :)
console.log(obj)

// Value type example
let num = 5
let num2 = num // In this case the value in "num" which is "5" is copied in "num2", it does not generate a new pointer/reference

let arr = []
console.log(arr) // This is not undefined, it has a value: an empty array



// This way of generating objects is object constructor, we must use the "new" keyword
let objNew = new Object() // we generate a new empty object
objNew.name = "Dejan" // we assign some properties
objNew.lastName = "Balzheski" // we assign some properties
objNew.printInfo = function() { // we assign some properties
  console.log("This is from object constructor")
}

console.log(objNew)
delete objNew.lastName

// let presenter = { 
// 	name :  "Dejan",
// 	lastName: "Blazheski",
// 	academy: "SEDC",
//   lecture: "Objects",
// }

// delete presenter.lecture
// presenter.age = 23

// presenter.change = function() {
//   delete this.lecture
//   this.age = 5
// }

// presenter.getFullName = function() {
//   console.log(`${this.name} ${this.age}`)
// }

// presenter.getFullName()
// presenter.change()
// console.log(presenter)

// An example for literal vs constructor
let person = {
  name,
  age: 23,
  hair: true,
  lastName: "Blazheski",
  getInfo: function() {
    return `${this.name} ${this.age} ${this.hair}`
  }
}
console.log(person)

// This is constructor function and it always should start with an Upper case, to generate an object from this constructor function, we must use the "new" keyword
function Person(name, age, hair, lastName) {
  this.name = name;
  this.age = age;
  this.hair = hair;
  this.lastName = lastName;
  this.getInfo = function() {
    return `${this.name} ${this.age} ${this.hair}`
  }
}

// We can reuse that same constructor function as a template to generate more objects with the same structure,  we must use the "new" keyword
let vukashin = new Person("Vukashin", 26, false, "Obradovikj")
let dejan = new Person("Dejan", 23, false, "Blazheski")
let emptyObj = new Person()
console.log(vukashin)
console.log(dejan)
console.log(emptyObj)

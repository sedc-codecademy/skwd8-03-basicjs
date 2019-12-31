// console.log(this);

// Constructor function
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.getFullName = function() {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  };
}

let trajan = new Person('Trajan', 'Stevkovski', 22);
let martin = new Person('Martin', 'Panovski', 22);

function getAge() {
  return this.age;
}

// console.log(this);

trajan.getAge = getAge;
// console.log(trajan);
// console.log(martin);
// console.log(getAge());
// console.log(trajan.getAge());
// trajan.getFullName();

// Function that returns the height and width of the window
function windowSize() {
  console.log(this);
  let width = this.innerWidth;
  let height = this.innerHeight;
  return [height, width];
}

martin.getWindowSize = windowSize;
martin.innerHeight = 499;
martin.innerWidth = 222;

// windowSize();
// console.log(martin.getWindowSize());

// Car constructor function, with optional parameters that have default values
function Car(model, color, year, fuel, fuelConsumption, hasHook = false, hasAc = false) {
  this.color = color;
  this.fuel = fuel;
  this.year = year;
  this.model = model;
  this.fuelConsumption = fuelConsumption;
  this.hasHook = hasHook;
  this.hasAc = hasAc;

  this.getFuelConsumptionForDistance = function(distance) {
    return distance * (this.fuelConsumption / 100);
  };

  this.addHook = function() {
    this.hasHook = true;
  };
  this.removeHook = function() {
    this.hasHook = false;
  };
}

let newCar = new Car('Yugo', 'Yellow', 1978, 'Diesel', 12);
let ferari = new Car('Ferari', 'Red', 2000, 'TNG', 10);
let ford = new Car('Ford', 'Blue', 1999, 'Diesel', 15);

let fuelConsumptionPerKM = newCar.getFuelConsumptionForDistance(200);
let fuelConsumptionPerKM1 = ferari.getFuelConsumptionForDistance(200);
let fuelConsumptionPerKM2 = ford.getFuelConsumptionForDistance(200);
// console.log(fuelConsumptionPerKM);
// console.log(fuelConsumptionPerKM1);
// console.log(fuelConsumptionPerKM2);

let arr = [newCar, ferari, ford];
// console.log(arr);

// looping though object elements in array
for (let element of arr) {
  console.log(element.model);
  console.log(element.color);
  console.log(element.getFuelConsumptionForDistance(500));
  console.log('-------------------------------------------------------');
}

let carWithoutColor = new Car('Opel', 1999, 'Diesel', 10);

carWithoutColor.addHook();

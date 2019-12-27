// let obj = {};
// console.log(obj);

// obj.name = "Trajan";
// obj.age = 33;

// console.log(obj);



// let hotel = {
//     name: "Quay",
//     rooms: 40,
//     booked: 25,
//     gym: true,
//     roomTypes: ["Twin", "Appartment", "SIngle"],
//     "has Pool": true,

//     checkAvailability: function () {
//         return this.rooms - this.booked;
//     }
// }

// console.log(hotel);

// console.log(hotel.name);
// let availableRooms = hotel.checkAvailability;
// console.log(availableRooms);

// for (let element of hotel.roomTypes) {
    
// }
// console.log(hotel["has Pool"])
// let hotelName = hotel['name'];
// console.log(hotelName);

// let me = {
//     name: "Trajan",
//     lastName: "Stevkovski",
//     age: 22,
//     isBeautiful: false,
//     hobbies: ["Coding", "Drinking", "Eating"]
// };
// delete me.age;
// console.log(me.age)
// me.name = "Stefan";
// me.hobbies.pop();
// console.log(me);
// let str = 'age';

// let a = me[str];
// console.log(a);


function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function () {
        return this.rooms - this.booked;
    }

    this.dateOfConstruction = function(yearOfConstruction) {
        let date = new Date();
        let currentYear = date.getFullYear();
        // let yearOfConstruction = 1998;

        return currentYear - yearOfConstruction;
    }
}

// let palace = new Object();
// let date = new Date();

let meriot = new Hotel("Meriot", 100, 50);
let hollidayInn = new Hotel("Holiday Inn", 80, 20);
let laki = new Hotel("Laki", 5, 5);

// console.log(meriot);
// console.log(hollidayInn);
// console.log(laki);

// console.log(meriot.checkAvailability());
// console.log(hollidayInn.checkAvailability());
// console.log(laki.checkAvailability());

// console.log(laki.dateOfConstruction(1998));
// console.log(meriot.dateOfConstruction(1994));
// console.log(hollidayInn.dateOfConstruction(1988));

// console.log(`${meriot.name} has ${meriot.checkAvailability()} rooms avaliable.`);

// let avaliableRooms = meriot.rooms - meriot.booked;


function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let trajan = new Person("Trajan", "Stevkovski", 22);
let martin = new Person("Martin", "Panovski", 22);

function getAge() {
    return this.age;
}

trajan.getAge = getAge;

console.log(getAge());
console.log(trajan.getAge());
// martin.hasGlasses = true;
// console.log(trajan);
// console.log(martin);

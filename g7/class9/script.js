// Create a simple object
// Every time we want to create an object we treat it as other data types
// Ex: You can put it in a variable, array, another object, as a function parameter
// When a value is created with { } it means it's an object
// In an object we can have properties and methods only
// Properties can have any value type 
let simpleBob = {
    firstName: "Bob", // property with string type
    lastName: "Bobsky", // property with string type
    age: 23, // property with number type
    sayHello: function(){ // method that we can call
        // this -> the object we are currently in
        console.log(`${this.firstName} says hello!`);
    }
}

// Get value of an object
console.log(simpleBob.lastName);
// Call a method of an object
simpleBob.sayHello();
// Change a property
console.log("Before: " + simpleBob.age);
simpleBob.age = 100;
console.log("After: " + simpleBob.age);
// Add new properties or methods
simpleBob.pet = {
    name: "Sparky",
    age: 2,
    isGoodBoi: true
};
// Call an object property from an object
console.log(simpleBob.pet.name);

// more complicated object
let bob = {
    firstName: "Bob",
    lastName: "Bobsky",
    job: {
        title: "developer",
        company: {
            name: "SEDC",
            staff: 40,
            academies: ["Code", "Design", "Networks"] // array of strings
        }
    },
    pet: {
        name: "Sparky",
        age: 2,
        isGoodBoi: true
    },
    friends: [ // Array of objects
        {
            name: "Jill",
            phone: 12312415
        },
        {
            name: "Greg",
            phone: 46464554
        }
    ],
    newFriends: [] // We use empty array every time we expect to get multiple values later in the applications life
}
// An array stores multiple things of the same type ( usually )
// An object describes an entity with multiple values of multiple types

// Find first friend name
console.log(bob.friends[0].name);
// Find the company name where bob works
console.log(bob.job.company.name);
// Bob makes a new friend
bob.newFriends.push({
    name: "Billy",
    phone: 4534535356
});

// get property by input
let input = prompt("Enter a property name:");
console.log("Dot input: " + bob.input); // bob does not have any property named input ( This does not connect to the prompt )
console.log("Square brackets input: " + bob[input]); // This takes the value from the prompt ( string ) and adds it in the square brackets where it finds the KEY with that name 


























// let lastBob = {
//     name: "Bob",
//     last: "Bobsky",
//     age: 23,
//     pets: [
//         {
//             name: "Spark",
//             age: 2
//         },
//         {
//             name: "Bak",
//             age: 3
//         }
//     ]
// }
// // Looping through the keys of an object
// for (let prop in lastBob) {
//     console.log(prop);
// }

// // Looping through the values of an object
// for (let prop in lastBob) {
//     console.log(lastBob[prop]);
// }
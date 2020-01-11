# Pet Shelter

## Part 1
Create a function (constructor or regular) that will return an object that describes a pet, with the following properties:
- `name` - that is the name of the pet
- `type` - which is the type of animal the pet is
- `breed` - the breed of the pet
- `preferredFood` - the food that this pet likes best
- `age` - the age of the pet
- `isHealthy` - whether the pet is healthy or sick
- `owner` - the person who owns the pet
- `eat` - a method that takes no parameters will returns a message like: The {type of the pet} {name of the pet} is eating {the food that this pet eats}
- `adopt` - a method that takes a person and sets that person as the pet's owner.
- `isAdopted` - a method that returns true or false depending of whether the pet has a owner

Create an array that represents an animal shelter, and add at least five pets to the shelter. None of them should have owners.

## Part 2

Create a function (constructor or regular) that will return an object that describes a person, with the following properties:

- `firstName` - The first name of the person
- `lastName` - The last name of the person
- `age` - The age of the person
- `adopt` - method that gets shelter array as a parameter and a string with the type of pet the person wants to adopt
- **(bonus)** `pets` - an array of the pets the person owns (initially empty) 
- **(bonus)** `abandon` - method that abandons a pet whose owner is the person

Create at least two persons. Have each of them adopt an animal from the shelter.  
**(bonus)** The pets should be added to the `pets` array of their owners and removed form the shelter.  
**(bonus)** Have one person adopt an animal that the other has abandoned.  
**(bonus)** Have one person adopt an animal that the other person currently owns.


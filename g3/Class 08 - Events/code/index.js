function logSomething() { // Standard definition of a function, it has a name
  console.log(new Date().getFullYear())
  return "something"
}

let logSomethingInVariable = function() { // This is anonymous function that is saved in a variable, it does NOT have a name, the variable's name is not the function's name
  console.log(new Date().getFullYear())
  return "something"
}

console.log(logSomething) // Logs the whole structure and definition of the functions
console.log(logSomething()) // Logs only the value that is returned from the function

console.log(logSomethingInVariable)
console.log(logSomethingInVariable())

// No javascript code for old school node is needed, only the function definition
let middleSchoolNode = document.getElementById("middleSchool")
middleSchoolNode.onclick = logSomething // We pass the definition of the function(logSomething in this case), we should NOT call the function with "()"
// middleSchoolNode.onclick = logSomething() // This will set the result of the function as a value, not the function definition
// middleSchoolNode.onscroll = logSomethingInVariable // Example for another event
// middleSchoolNode.onmousemove = logSomething


let newSchoolNode = document.getElementById("newSchool")
// addEventListener is a function that every HTMLElement has it, with this function we can set multiple events and it's the recommended way of settings events
newSchoolNode.addEventListener("click", logSomethingInVariable) // the first parameter is the name of the event(example: click, scroll...), and the second parameter is the event handler(a function definition), we are not calling the function with "()"

newSchoolNode.addEventListener("click", function(event) { // We can also pass an anonymous function without keeping it in a variable like the example before, we can "save" some variables names for something else :)
  // The "event" parameter is passed as an argument by addEventListener essentially when our anonymous function is called inside addEventListener, we will get into it more deeper in the advanced course
  // console.log(event)
  console.log("this is new school")
})


let showMyName = function(name, event) {
  if(event) {
    console.log(event.target)
  }
  alert(`Hello from ${name}!`)
}

let showMyNameBtnNode = document.getElementById("showMyNameBtn")
let refsbNode = document.getElementById("refsb")

showMyNameBtnNode.addEventListener("click", e => { // If we want to pass parameters to our function we can use an anonymous function definition to wrap our function inside and call it with the desired parameters
  let nameInput = prompt("Enter your name:")
  showMyName(nameInput, e)
}) 

showMyName("Vukashin") // we can also use this function anywhere we want, not only in events


showMyNameBtnNode.addEventListener("click", logSomething) // we set logSomething as an event handler

refsbNode.addEventListener("click", () => {
  showMyNameBtnNode.removeEventListener("click", logSomething) // We remove the event handler(logSomething) from showMyNameNode when another button is clicked, NOTE: if we want to remove an event handler we must keep that event handler in a variable, and pass that variable insead, direct passing of an anonymous function will not work
})


// This is a function that returns another anonymous function, try to figure it out by yourselfs and we will have a talk on the next class
let testFunc = name => e => {
  console.log(name)
  console.log(e)
}

let nameInput = prompt("Enter your name:")
showMyNameBtnNode.addEventListener("click", testFunc(nameInput))

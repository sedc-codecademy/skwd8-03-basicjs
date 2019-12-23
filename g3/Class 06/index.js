// Task 0
// Creates an array from 1 - <num>
function createArray(num) {
  let newArray = []

  for(let i = 1; i <= num; i++){
    newArray.push(i)
  }
  console.log(newArray) // [1,2,3,4,5]
  return newArray
}

createArray(5); // Calling the function for the first time it will create an array from 1 - 5
createArray(15); // Calling the function for the second time it will create an array from 1 - 5


// Task 2
// We send an array to the function and the funcion gives us back that same array but reversed
function reverseArr(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i])
  }
  return reversedArr;
}

let myArr = createArray(8) // We create an array with the function from the first task
let myArrReveresed = reverseArr(myArr) // We are reversing that array that we just created with the reverseArr function

console.log(myArr)
console.log(myArrReveresed)


// Task 3
// This function should return the INDEX(i variable from the for-loop) of an ELEMENT(element) if it exists in a given ARRAY(arr parameter)
function findIndexInArr(arr, element) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === element) {
      return i
    }
  }
  return -1
}

console.log(findIndexInArr(createArray(7), 4))

// Task 4
// Same as the previous function but instead of the index, it looks for the element in the array and returns true or false if it finds it
function checkIfElementExists(arr, element) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === element) {
      return true
    }
  }
  return false
}

// Task 6
// This function is the same as the homework, but instead of the sum we need to find the difference
// We have to find the smallest and the biggest element in the array(arr parameter) and calculate the difference
function difMaxMin(arr) {
  let min = +Infinity // We set "min" to the "biggest" positive number, because we have to compare the first element in the array to the biggest possible number to be a valid expression
  let max = -Infinity // We set "max" to the "smallest" negative number, because we have to compare the first element in the array to the smallest possible number to be a valid expression
  // We can also set min/max to the first element of the array so that we can be sure that all the elements are compared as a valid expression
  //let min = arr[0]
  //let max = arr[0]
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max)
      max = arr[i]
    if(arr[i] < min)
      min = arr[i]
  }
  return max - min
}

let difArr1 = [-1, -6, -8, -1]
let difArr2 = [1, 6, 8, 1]


// Task Unknown :P
let appNode = document.getElementById("app")
let userInput = prompt("Enter...:")

// Example of adding h2 element in the html document as a child(between the open and closing tags) in appNode(<div id="app">... checkout the index.html) element using innerHTML
appNode.innerHTML = `
  <h2 id="dejan" class="h2Style">${userInput}</h2>
`

// Example of adding the same h2 element in the html document between the same same tags of the same appNode element, but using the DOM object's(document object) funconalities
let h2Node = document.createElement("h2") // first we create an element with createElement function. This element is created in the background, it's not rendered(drawn) in the html document
h2Node.textContent = userInput // setting the textContent of the h2Node element
h2Node.classList.add("h2Style") // adding a class with name "h2Style" to the h2Node element, check to "index.css" file to see the class declaration
appNode.append(h2Node) // adding the h2Node element as a child in appNode element. append() puts the h2Node as a last CHILD element in appNode


// This is a sneak peak example, we will learn the details on "events" class
let myBtn = document.getElementById("myBtn")
myBtn.addEventListener("click", function() {
  h2Node.classList.remove("h2Style")
  h2Node.classList.add("h2Style2")
  h2Node.addEventListener
})

let appNode = document.getElementById("app")
let userInput = prompt("dasdas")
let titleNode = document.getElementById("title")
titleNode.textContent = userInput

let counter = 0
titleNode.addEventListener("click", e => {
  counter++
  let h2Node = document.createElement("h2")
  h2Node.classList.add("h2Class")
  appNode.append(h2Node)

  let allH2s = document.getElementsByClassName("h2Class")
  for (const h2El of allH2s) {
    h2El.textContent = `${userInput} ${counter}`
  }
})
// // Bonus Homework - The part from class 7
// let rootNode = document.getElementById("root")
// let titleNode = document.createElement("h2")
// rootNode.append(titleNode)

// let recipeInput = prompt("What is the name of the recipe?")
// let ingNumInput = prompt("How many ingrediens do you need?")

// let ingredients = []
// for(let i = 0; i < parseInt(ingNumInput); i++) {
//   let ingredientName = prompt(`What is the name of the ${i + 1} ingredient`)
//   ingredients.push(ingredientName)
// }

// titleNode.textContent = recipeInput


// let tableNode = document.createElement("table")
// rootNode.append(tableNode)
// let theadNode = document.createElement("thead")
// tableNode.append(theadNode)
// let tbodyNode = document.createElement("tbody")
// tableNode.append(tbodyNode)

// for(let i = 0; i < ingredients.length; i++) {
//   let trNode = document.createElement("tr")
//   tbodyNode.append(trNode)

//   if(i % 2 === 0) // Logic for coloring either odd or even row
//     trNode.classList.add("oddRow")
//   else
//     trNode.classList.add("evenRow")

//   let tdNode = document.createElement("td")
//   trNode.append(tdNode)
//   tdNode.textContent = i + 1

//   let tdIngNode = document.createElement("td")
//   trNode.append(tdIngNode)
//   tdIngNode.textContent = ingredients[i]
// }

// // let ulNode = document.createElement("ul")
// // for (const ingredient of ingredients) {
// //   let liNode = document.createElement("li")
// //   ulNode.append(liNode)
// //   liNode.textContent = ingredient
// // }
// // rootNode.append(ulNode)


// Bonus homework - The refactored part
let rootNode = document.getElementById("root")

let recipeInput = prompt("What is the name of the recipe?")
let ingNumInput = prompt("How many ingrediens do you need?")

function recipePanel(recipeName, ingredientsCount, parentNode) {
  renderElement(makeRecipeTitle(recipeName), parentNode)

  let ingredients = getIngredients(ingredientsCount)

  // renderElement(makeUl(ingredients), parentNode) // Uncomment this to draw a list instead of table
  renderElement(makeTable(ingredients), parentNode)
}

function renderElement(element, parentNode) {
  parentNode.append(element)
}

function getIngredients(count) {
  let ingredients = []

  for(let i = 0; i < count; i++) {
    let ingredientName = prompt(`What is the name of the ${i + 1} ingredient`)
    ingredients.push(ingredientName)
  }

  return ingredients
}

function makeRecipeTitle(title) {
  let titleNode = document.createElement("h2")
  titleNode.textContent = title
  return titleNode
}

// Function to create a unordered list from an ingrediant array
function makeUl(ingredients) {
  let ulNode = document.createElement("ul") // Create a ul element

  for (const ingredient of ingredients) { // For-of loop that puts every element in the array as a li(list item) in the ul
    let liNode = document.createElement("li") // Create li element
    ulNode.append(liNode)
    liNode.textContent = ingredient // Sets the value of the current item in the array in the current created li HTML elemente
  }

  return ulNode
}

// Function to create a table from an ingrediant array
function makeTable(ingredients) {
  let tableNode = document.createElement("table") // Create table element

  let theadNode = document.createElement("thead") // Create thead element
  tableNode.append(theadNode)

  let trHeadNode = document.createElement("tr") // Create tr(table row) element that should be in the thead element
  theadNode.append(trHeadNode)

  let thNumNode = document.createElement("th") // Create th(table head) element the should represent the ingredient's number
  trHeadNode.append(thNumNode)
  thNumNode.textContent = "#" // "#" represents a number

  let thIngNode = document.createElement("th") // Create th(table head) element the should represent the ingredient's name
  trHeadNode.append(thIngNode)
  thIngNode.textContent = "Name"


  let tbodyNode = document.createElement("tbody") // Create tbody element and puts it in the table
  tableNode.append(tbodyNode)

  for(let i = 0; i < ingredients.length; i++) { // For-loop that creates a table row element for every item in the array(ingredients)
    let trBodyNode = document.createElement("tr") // Create a tr(table row) element in the tbody element
    tbodyNode.append(trBodyNode)

    if(i % 2 === 0) // Logic for coloring either odd or even row
      trBodyNode.classList.add("oddRow")
    else
      trBodyNode.classList.add("evenRow")
  
    let tdNumNode = document.createElement("td") // Create a td(table data) element that should represent the data of the ingredient's number
    trBodyNode.append(tdNumNode)
    tdNumNode.textContent = i + 1 // i + 1 because counting in arrays starts from 0, but in the real world starts from 1
  
    let tdIngNode = document.createElement("td") // Create a td(table data) element that should represent the data of the ingredient's name
    trBodyNode.append(tdIngNode)
    tdIngNode.textContent = ingredients[i] // Puts the value of the current element from the array in the td element
  }

  return tableNode
}

recipePanel(recipeInput, ingNumInput, rootNode)
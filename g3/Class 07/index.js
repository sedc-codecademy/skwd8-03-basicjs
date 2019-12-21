// let rootNode = document.getElementById("root")
// let newDivNode = document.getElementById("newDiv")
// rootNode.classList.add("myClass")

// function makeUl(arr, parentNode) {
//   let ulNode = document.createElement("ul")
//   for (const el of arr) {
//     let liNode = document.createElement("li")
//     liNode.textContent = el
//     ulNode.append(liNode)
//   }
//   parentNode.append(ulNode)
// }

// let arr = [5, 3, "dejan", "tastatura"]
// makeUl(arr, rootNode)
// makeUl(arr, newDivNode)

let rootNode = document.getElementById("root")
let titleNode = document.createElement("h2")
rootNode.append(titleNode)

let recipeInput = prompt("What is the name of the recipe?")
let ingNumInput = prompt("How many ingrediens do you need?")

let ingredients = []
for(let i = 0; i < parseInt(ingNumInput); i++) {
  let ingredientName = prompt(`What is the name of the ${i + 1} ingredient`)
  ingredients.push(ingredientName)
}

titleNode.textContent = recipeInput

let tableNode = document.createElement("table")
rootNode.append(tableNode)
let theadNode = document.createElement("thead")
tableNode.append(theadNode)
let tbodyNode = document.createElement("tbody")
tableNode.append(tbodyNode)

for(let i = 0; i < ingredients.length; i++) {
  let trNode = document.createElement("tr")
  tbodyNode.append(trNode)

  let tdNode = document.createElement("td")
  trNode.append(tdNode)
  tdNode.textContent = i + 1

  let tdIngNode = document.createElement("td")
  trNode.append(tdIngNode)
  tdIngNode.textContent = ingredients[i]
}


// let ulNode = document.createElement("ul")
// for (const ingredient of ingredients) {
//   let liNode = document.createElement("li")
//   ulNode.append(liNode)
//   liNode.textContent = ingredient
// }
// rootNode.append(ulNode)
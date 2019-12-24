let groceries = ["item1", "item2"];

// selectors
let resultDiv = document.getElementById("result").firstElementChild;
let messageDiv = document.getElementById("message");
let getGroceriesRow = document.getElementById("getGroceries");

let addItemRow = document.getElementById("addItem");
let findItemRow = document.getElementById("findItem");
let deleteItemRow = document.getElementById("deleteItem");
let clearListRow = document.getElementById("clearList");

// Functions
// Task 1:
// Show Groceries

function showGroceriesList(element) {
    if (groceries.length === 0) {
        return "No groceries on your list";
    }
    element.innerHTML = '';
    for (let item of groceries) {
        if (item) { // proveruvame dali e falsy vrednost
            element.innerHTML += `<li>${item}</li>`;
        }
    }
    return "Your groceries";
}

//Task 2:
// Add Groceries

function addToGroceriesList(inputValue) {
    if (typeof (inputValue) === 'string'
        && inputValue.length > 1) {
        if (!checkIfItemExists(inputValue)) {
            groceries.push(inputValue);
            return `You have added ${inputValue} to the list`;
        }
    }
    return `The item ${inputValue} was not 
        added to the list. Sorry`;
}

function checkIfItemExists(inputValue) {
    for (let item of groceries) {
        if (item === inputValue) {
            return true;
        }
    }
    return false;
}

// Task 3
// Find grocerie

function checkForItemInGroceriesList(inputValue) {
    for (let item of groceries) {
        if (item
            && inputValue.toLowerCase() === item.toLowerCase()) {
            return `The item ${inputValue} was found`;
        }
    }
    return `There was no ${inputValue} item in the list`;
}

// Task 4
// Delete grocerie

function deleteItemFromGroceriesList(inputValue) {
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] !== null // only checking if the item is not null
            && groceries[i].toLowerCase() === inputValue.toLowerCase()) {
            groceries[i] = null;
            return `The item ${inputValue} was deleted`;
        }
    }
    return `No item like ${inputValue} was found`;
}

// Task 5
// Clear list

function clearList() {
    groceries = [];
    let message = showGroceriesList(resultDiv);
    resultDiv.innerHTML = '';
    messageDiv.innerText = message;
}


// Events

// Show groceries event
getGroceriesRow
    .querySelector("button")
    .addEventListener('click', function () {
        let message = showGroceriesList(resultDiv);
        messageDiv.innerText = message;
    });

// Add groceries event
addItemRow
    .querySelector("button")
    .addEventListener('click', function () {
        let input = addItemRow
            .querySelector("input");
        let message = addToGroceriesList(input.value);
        input.value = '';
        messageDiv.innerText = message;
        showGroceriesList(resultDiv);
        // addItemRow // clear input value
        //     .querySelector("input")
        //     .value = '';
    });

// Find groceries item
findItemRow
    .querySelector("button")
    .addEventListener("click", function () {
        let inputValue = findItemRow
            .querySelector("input")
            .value;
        let message = checkForItemInGroceriesList(inputValue);
        messageDiv.innerText = message;
    });

// Delete groceries item
deleteItemRow
    .querySelector("button")
    .addEventListener("click", function () {
        let inputValue = deleteItemRow
            .querySelector("input")
            .value
        let message = deleteItemFromGroceriesList(inputValue);
        messageDiv.innerText = message;
        showGroceriesList(resultDiv);
    });


// Only work on enter key

deleteItemRow
    .querySelector("input")
    .addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            let inputValue = deleteItemRow
                .querySelector("input")
                .value
            let message = deleteItemFromGroceriesList(inputValue);
            messageDiv.innerText = message;
            showGroceriesList(resultDiv);
        }
    });

// clear list event
clearListRow
    .querySelector("button")
    .addEventListener("click", clearList);
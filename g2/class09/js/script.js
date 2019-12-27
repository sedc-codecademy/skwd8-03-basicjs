// // console.log("Script connected !");

// // Class 08 Phonebook exercise

// let firstNameEl = document.getElementById("firstName");
// let lastNameEl = document.getElementById("lastName");
// let phoneNumberEl = document.getElementById("phoneNumber");

// let saveBtn = document.getElementById("saveBtn");

// let tableEl = document.getElementById("contactList");

// let phonebook = [];

// function Contact(fName, lName, number) {
//     this.firstName = fName;
//     this.lastName = lName;
//     this.phoneNumber = number;
// }

// let clearPhoneBookInputs = function() {
//     firstNameEl.value = "";
//     lastNameEl.value = "";
//     phoneNumberEl.value = "";
// }

// let addContactsToPhonebook = function(phonebook) {
//     let tbody = document.querySelector("tbody");
//     tbody.innerHTML = "";

//     for (const contact of phonebook) {
//         let tableRow = document.createElement("tr");

//         let tdFirstName = document.createElement("td");
//         let tdLastName = document.createElement("td");
//         let tdPhoneNumber = document.createElement("td");

//         tdFirstName.innerText = contact.firstName;
//         tdLastName.innerText = contact.lastName;
//         tdPhoneNumber.innerText = contact.phoneNumber;

//         tableRow.appendChild(tdFirstName);
//         tableRow.appendChild(tdLastName);
//         tableRow.appendChild(tdPhoneNumber);

//         tbody.appendChild(tableRow);
//     }
// }

// saveBtn.addEventListener("click", function() {
//     let contact = new Contact(firstNameEl.value, lastNameEl.value, phoneNumberEl.value);
//     phonebook.push(contact);
//     clearPhoneBookInputs();
//     addContactsToPhonebook(phonebook);
// });

// addContactsToPhonebook(phonebook);


// ****************** //
// ***** JQUERY ***** //
// ****************** //

let allElements = $("*");
// console.log(allElements);

// let myTitle = $("#mainTitle")[0];
let myTitle = document.getElementById("mainTitle");
// console.log(myTitle);

// let updatedTitle = $(myTitle);
// console.log(updatedTitle);

let allParagraphs = $("p");
let firstParagraph = $("p:first");
let lastParagraph = $("p:last");

let secondChildrenParagraphs = $("p:nth-child(2)");

let wrapers = $(".wrapper,.innerWrapper");
// console.log(allParagraphs);
// console.log(firstParagraph);
// console.log(wrapers);


// console.log(allElements.first());

// * You can find more code examples in the presentation on OneDrive location
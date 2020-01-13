let box01 = document.querySelector("#div01");
let box02 = document.querySelector("#div02");
let box03 = document.querySelector("#div03");

let button = document.getElementById("btn");

// ----------------------------------------
// Event bubbling - third property false

// box01.addEventListener(
//   "click",
//   function() {
//     console.log("BOX 1 is clicked.");
//   },
//   false
// );

// box02.addEventListener(
//   "click",
//   function() {
//     console.log("BOX 2 is clicked.");
//   },
//   false
// );

// box03.addEventListener(
//   "click",
//   function() {
//     console.log("BOX 3 is clicked.");
//   },
//   false
// );

// button.addEventListener(
//   "click",
//   function() {
//     console.log("The magic button is clicked.");
//   },
//   false
// );

// ------------------------------------------
// Event capturing - third parameter set to true

box01.addEventListener(
  "click",
  function() {
    console.log("BOX 1 is clicked.");
  },
  true
);

box02.addEventListener(
  "click",
  function() {
    console.log("BOX 2 is clicked.");
  },
  true
);

box03.addEventListener(
  "click",
  function() {
    console.log("BOX 3 is clicked.");
  },
  true
);

button.addEventListener(
  "click",
  function() {
    console.log("The magic button is clicked.");
  },
  true
);

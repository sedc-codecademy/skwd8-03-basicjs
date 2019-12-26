// Events
// Important stuff:
// What element will we listen on
// What event would we listen for

function hailTheConsole(){
    console.log("Hail console. We bring much events!");
}

// Standard event handler
// First we need to select the element we want to attach the event to
let btn = document.getElementById("clickBaitBtn");
// After we have the element we can attach an event handler
btn.onclick = hailTheConsole;

// We can also give anonymous functions to a handler
btn.onclick = function(){
    console.log("This happens from an anonymous function!");
}
// This will overwrite the previous handler function

// EventListener
let btn2 = document.getElementById("clickBaitBtn2");
btn2.addEventListener("click", hailTheConsole);

btn2.addEventListener("click", function(){
    console.log("This happens fron another anonymous function!");
})

// Getting values
let nameInput = document.getElementById("name");
let jobInput = document.getElementById("job");
let jobBtn = document.getElementById("postJobRequest");
let resultsDiv = document.getElementById("jobResults");

// Less annoying version
// jobBtn.addEventListener("click", function(){
//     console.log(`Please hire ${nameInput.value} for the ${jobInput.value} position!`);
//     nameInput.value = "";
//     jobInput.value = "";
// })

jobBtn.addEventListener("click", function(){
    let text = `Please hire ${nameInput.value} for the ${jobInput.value} position!`;
    resultsDiv.innerHTML += `<h1 id="bob"> ${text} </h1>`;
    let h1 = document.getElementById("bob");
    h1.style.color = "red";
    nameInput.value = "";
    jobInput.value = "";
})

// // Getting values on the start of the script and not in the moment when the button is clicked
// let nameInput = document.getElementById("name").value;
// let jobInput = document.getElementById("job").value;
// let jobBtn = document.getElementById("postJobRequest");

// jobBtn.addEventListener("click", function(){
//     console.log(`Please hire ${nameInput} for the ${jobInput} position!`);
// })


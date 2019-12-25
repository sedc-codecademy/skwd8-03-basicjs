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
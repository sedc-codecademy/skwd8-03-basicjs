let btnHello = document.getElementById("btnHello");

function sayHello(){
    alert("Hello you just clicked me!");
}


//Traditional event handlers
// btnHello.onclick = sayHello;


//DOM level 2 listeners
// btnHello.addEventListener("mouseover", sayHello);


let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let paragraph = document.getElementById("count");
let counter = 0;

paragraph.innerText = counter;

increase.addEventListener("click", function(){
    counter++;
    paragraph.innerText = counter;
});

decrease.addEventListener("click", function(){
    counter--;
    paragraph.innerText = counter;
});

btnHello.addEventListener("click", function() {
    counter = 0;
    paragraph.innerText = counter;
});
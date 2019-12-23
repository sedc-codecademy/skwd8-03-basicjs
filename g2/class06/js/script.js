// let btnHello = document.getElementById("btnHello");

// function sayHello(){
//     alert("Hello you just clicked me!");
// }


// //Traditional event handlers
// // btnHello.onclick = sayHello;


// //DOM level 2 listeners
// // btnHello.addEventListener("mouseover", sayHello);


// let increase = document.getElementById("increase");
// let decrease = document.getElementById("decrease");
// let paragraph = document.getElementById("count");
// let counter = 0;

// // paragraph.innerText = counter;

// // increase.addEventListener("click", function(){
// //     counter++;
// //     paragraph.innerText = counter;
// // });

// // decrease.addEventListener("click", function(){
// //     counter--;
// //     paragraph.innerText = counter;
// // });

// // btnHello.addEventListener("click", function(event) {
// //     // console.log(event);
// //     console.log(event.type);
// //     // counter = 0;
// //     // paragraph.innerText = counter;
// //     // window.location.reload();
// // });

// // btnHello.addEventListener("mouseover", function(event) {
// //     // console.log(event);
// //     console.log(event.type);
// //     // counter = 0;
// //     // paragraph.innerText = counter;
// //     // window.location.reload();
// // });

// // btnHello.addEventListener("mouseout", function(event) {
// //     console.log(event.type);
// // });


// let btnSave = document.getElementById("save");
// // let result = document.getElementById("name");
// // let firstName = document.getElementById("firstName");

// // btnSave.addEventListener("click", function(){
// //     result.innerText = firstName.value;
// // });

// firstName.addEventListener("keyup", function(event) {
//     // console.log(event.target.value);
//     result.innerText = event.target.value;
// });


// let trafficLight = document.getElementById("colors");

// trafficLight.addEventListener("mouseenter", function(event){
//     console.log(event.target);
//     event.target.style.backgroundColor = "yellow";
// });


// trafficLight.addEventListener("mouseout", function(event){
//     event.target.style.backgroundColor = "green";
//     event.target.innerHTML = "<h2>GO!</h2>"
// });

// let sum = function(a, b){
//     return a + b;
// }



// btnSave.addEventListener("click", function(){
//     event.target.value = sum(1,2);
// });



// let elUsername = document.getElementById('firstName');

// let elMsg = document.getElementById('name');

// function checkUsername(minlength) { 

// 	if(elUsername.value.length < minlength){
// 		elMsg.innerText = `Username must be ${minlength} characters or more`;
// 	}else{ 
// 		elMsg.innerHTML = "";  
// 	}
// }

// elUsername.addEventListener('blur',function(){

// 	checkUsername(5); 
// });


let btnTest = document.getElementById("testMe");
let first = document.getElementById("first");
let second = document.getElementById("second");


btnTest.addEventListener("click", function(event) {
    // event.stopPropagation();
    alert(event.target.tagName);
});


first.addEventListener("click", function(event) {
    alert(event.target.tagName);
});


second.addEventListener("click", function(event) {
    event.stopPropagation();
    alert(event.target.tagName);
});

let changeBtn = document.getElementById("changer");
let paragraph = document.getElementById("text");

changeBtn.addEventListener("click", function() {
    paragraph.style.color = "red";
    paragraph.style.fontSize = "30px";
    paragraph.style.fontFamily = "Arial";
})






// btnTest.addEventListener("click", function(event){
//     event.stopPropagation();
//     alert(event.target.tagName);
// });
// first.addEventListener("click", function(event){
//     alert(event.target.tagName);
// });
// second.addEventListener("click", function(event){
//     alert(event.target.tagName);
// });
// third.addEventListener("click", function(event){
//     alert(event.target.tagName);
// });
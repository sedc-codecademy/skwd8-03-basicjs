console.log("The script works");

let h1 = $("#mainTitle");
let vanillah1 = document.getElementById("mainTitle");
console.log(h1);
console.log(vanillah1);
console.log(h1.text());
h1.text("This is a new text");

console.log(h1.innerText); // This will not work because we are calling a vanilla property from a JQuery object
console.log(vanillah1.innerText); // This will work
console.log(h1[0].innerText); // This will work since we are selecting the first normal element from the JQuery wrapper
console.log(h1.parent()); // this will work because its jquery function on jquery object
// console.log(vanillah1.parent()); // This will not work
// CONVERTING FROM AND TO JQUERY

// Converting jquery in to normal js
let convertedh1 = h1.get(); // with get() we convert the JQuery wrapper in to a list of normal elements
console.log(convertedh1[0].innerText);
// Convert normal element in jquery
let convertedh1ToJquery = $(vanillah1);
console.log(convertedh1ToJquery);

// Manipulating DOM
let input = $("input").first();
let btn1 = $("button").first();
let btn2 = $("button").last();
let btn3 = $("button")[1];
btn3 = $(btn3);
console.log(btn3);


btn1.click(function(){
    let inputValue = input.val(); // getting the value from the input
    h1.after(`<h1>${inputValue}</h1>`); // adding a new h1 element
    input.val(""); // cleaning the input
})

btn2.click(function(){
    $("#wrapper").html(`<h1 id="mainTitle">Class 10 - jquery</h1>`);
    $("body").css("background-color", "blue");
})


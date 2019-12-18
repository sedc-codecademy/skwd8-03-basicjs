// console.log(document);

// var h1 = document.querySelector("[data='5']");
// console.log(h1);

//HERE

//Old way (in general)
let h1 = document.getElementsByClassName('main-header');
let h1_2 = document.getElementsByTagName('h1');
let ul = document.getElementById("main-ul");

for(let i = 0; i < h1.length; i++)
{
    if(h1[i].tagName === 'H1')
    {
        console.log(h1[i]);
    }
}

//New way
let h1new = document.querySelectorAll('.main-header'); //Get all with this class
let h1_2new = document.querySelectorAll('h1');
let ui_new = document.querySelector('#main-ul');

let first_main_header = document.querySelector('.main-header');

let specific = document.querySelectorAll(".main-div > h1");

first_main_header.style.background = 'red';
first_main_header.innerHTML = '<a href="#">Click here</a>';

let innerValue = first_main_header.innerHTML;
console.log(innerValue);

let h2 = document.querySelector('h2');

if(h2.innerHTML.match(/Subtitle/ig))
{
    h2.style.background = 'blue';
    h2.style.color = 'white'
}
else
{
    h2.style.background = 'black';
    h2.style.color = 'white'
}

//console.log(h2.nextElementSibling, h2.nextSibling);
console.log(h2.parentElement);
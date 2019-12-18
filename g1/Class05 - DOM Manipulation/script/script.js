// DOM MANIPULATION

// Select by ID
// let theTitle = document.getElementById('title');
// console.log(theTitle);
// console.log(theTitle.textContent)

// Select by Class name
// let paragraphs = document.getElementsByClassName('paragraph');
// let paragraphs = document.getElementsByClassName('white-paragraph');
// let paragraphs = document.getElementsByClassName('black-paragraph');
// console.log(paragraphs);

// Select by tag name
// let paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs);

// Query Selectors

// let paragraphs = document.querySelectorAll('p');
// console.log(paragraphs);

// let paragraphs = document.querySelectorAll('.paragraph');
// console.log(paragraphs);

// let paragraph = document.querySelector('.paragraph');
// console.log(paragraph);

// let title = document.querySelector('#title');
// console.log(title);

// Siblings

// let paragraph = document.querySelectorAll('.paragraph')[1];
// console.log('main', paragraph);

// let nextSibling = paragraph.nextElementSibling;
// console.log('next sibling', nextSibling);

// let previousSibling = paragraph.previousElementSibling;
// console.log('previous sibling', previousSibling);

// let title = document.getElementById('title');
// let parent = title.parentElement;
// console.log(parent);

// Selecting children

// let div = document.getElementById('container');
// let children = div.children;
// console.log(children);
// console.log(div.firstElementChild)
// console.log(div.lastElementChild)

// INNER TEXT

// let title = document.getElementById('title');
// title.innerText = 'Hello from the JS side!';

// INNER HTML

let div = document.querySelector('#container');
console.log('before', div.innerHTML)
div.innerHTML = div.innerHTML + `<p>This is new text</p>`;
console.log('after', div.innerHTML)

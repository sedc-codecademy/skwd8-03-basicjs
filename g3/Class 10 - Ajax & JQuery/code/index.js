// Homework 2 from objects class
let books = []

function Book(title, author, readingStatus) {
  this.title = title;
  this.author = author;
  this.readingStatus = readingStatus;

  this.checkStatus = function() {
    if(this.readingStatus)
      return `The book: ${this.title} with author: ${this.author} is already read`
    else
      return `The book: ${this.title} with author: ${this.author} is not already read`
  }
}

// You can also add a book from HTML
let bookTitle = prompt("Enter the book title")
let bookAuthor = prompt("Enter the book author")
let bookReadingStatus = prompt("Enter the book reading status")

books.push(new Book(bookTitle, bookAuthor, bookReadingStatus))
console.log(books[0].checkStatus()) // We can check the status of the book with this method

// We can also use input value to check the status
let checkBookTitle = prompt("Which book do you want to check?")
for (const book of books) {
  if(book.title === checkBookTitle) {
    alert(book.checkStatus())
    break
  }
}

// Two scripts example
// console.log(dejan) // the "dejan" variable will throw an error because it's still not defined

let dejan = 8 // we define "dejan" here, check the second script

// debugger; // We can also use debugger feature to debug our code


console.log(dejan)

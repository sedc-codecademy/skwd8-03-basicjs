# Library application 📗
For the needs of your client you should develop an application that will serve as a library. It should have the following functionalities:
* The user needs to insert a new book into the library
* Every newly inserted book should be stored and displayed in a table

## Part 1 - The backbone 🦴
Books in the application should be objects. The book object should have the following properties:
`Id` - id of every newly inserted book (Unique for each book)
`Title` - the title of the book
`ISBN` - (International Standard Book) number of the book
`Author` - the author of the book
`Genre` - genre of the book (novel, adventure, history, poetry...)
`YearOfPublish` - the year when the book is published
`NumberOfPages` - number of pages for that book
`BookAge` - method that will calculate how old is the book

* Create an array that will have at least 3 books.
* Create a function that will add a new book into the array of books that will serve as a 		fake database.
* Create a function that will show every book from the array in the console.

## Part 2 - Input fields and validation 🚩
Create input fields and a "Save" button so that the user can insert a new book into the library. Below that add an empty table that has only headers with the properties that we need to display from the books.

 Make sure that the user is not allowed to insert a book that has:
* An empty input field (All of them are required)
* Text instead of number in year of publish field

## Part 3 - Display the newly inserted book 🏗
After the user fill in all the inputs, when "Save" button is clicked, the book should be added in the array of books, and displayed as a new row in the table that you already created. 

#### ** Be careful! The Id of every book should be automatically added behind the scene!**

# Happy coding and good luck!

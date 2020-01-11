# Library application 📗
For the needs of your client you should develop an application that will serve as a library. It should have the following functionalities:
* The user needs to insert a new book into the library
* Every newly inserted book should be stored and displayed in a table
* The user needs to be able to edit and delete each of the books

## Part 1 - The backbone 🦴
You should create a function (constructor) that will create the Book object. The book object should have the following properties:
* `Id` - id of every newly inserted book (Unique for each book)
* `Title` - the title of the book
* `ISBN` - (International Standard Book) number of the book
* `Author` - the author of the book
* `Genre` - genre of the book (novel, adventure, history, poetry...)
* `YearOfPublish` - the year when the book is published
* `NumberOfPages` - number of pages for that book
* `BookAge` - method that will calculate how old is the book

* Create an array that will have at least 2 books.
* Create a function that will add a new book into the array of books that will serve as a 		fake database.
* Create a function that will show every book from the array in the console.

## Part 2 - The DOM 🌳

#### 2.1 Input fields and validation
Create input fields and a "Save" button so that the user can insert a new book into the library. Below that add an empty table that has only headers with the properties that we need to display from the books.

 Make sure that the user is not allowed to insert a book that has:
* An empty input field (All of them are required)
* Title with less than 5 characters
* Text instead of number in year of publish field

#### 2.2 Display the newly inserted book
After the user fill in all the inputs, when "Save" button is clicked, the book should be added in the array of books, and displayed as a new row in the table that you already created. 

#### ** Be careful! The Id of every book should be automatically added behind the scene!**

#### 2.3 Edit and Delete functionalities
At the end of every row in the table, there should be two buttons, "Edit" and "Delete".

If the user clicks on the "Edit" button, the input fields above the table should be filled with the information of the book that needs to be edited. After changing something, the user can save the book and the changes should appear in the table for the same book. 

If the user clicks on the "Delete" button the book should be deleted from the array and from the table as well. 


# Happy coding and good luck!
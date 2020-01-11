let library = [];
let idCounter = 0;
let saveBtn = $("#save");
let titleInput = $("#title");
let isbnInput = $("#isbn");
let authorInput = $("#author");
let genreInput = $("#genre");
let yearOfPublish = $("#yearOfPublish");
let numOfPages = $("#numOfPages");
let result = $("#result");
let tbody = $("tbody");


let editedBook = {
    shouldSave: true,
    bookId: 0
}

function Book(id, title, isbn, author, genre, yearOfPublish, numOfPages) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
    this.author = author;
    this.genre = genre;
    this.yearOfPublish = yearOfPublish;
    this.numOfPages = numOfPages;

    this.bookAge = function () {
        let currentDate = new Date().getFullYear();
        return currentDate - this.yearOfPublish;
    }
}


let lordOfTheRings = new Book(generateId(), "Lord of the rings - The return of the king", 12345678, "J. R. R. Tolkien", "Fantasy", 1955, 416);
let secretsOfTheJavaScriptNinja = new Book(generateId(), "The secrets of the javascript ninja", 9781933988696, "John Resig, Bear Bibeault", "Programming", 2008, 392);

library.push(lordOfTheRings, secretsOfTheJavaScriptNinja);

function addBook(book) {
    library.push(book);
}

function editBook(bookId, title, isbn, author, genre, yearOfPublish, numOfPages) {
    let index = library.findIndex(x => x.id === parseInt(bookId));

    // let index = library.findIndex(function(book){
    //     return book.id === bookId;
    // });

    library[index].title = title;
    library[index].isbn = isbn;
    library[index].author = author;
    library[index].genre = genre;
    library[index].yearOfPublish = yearOfPublish;
    library[index].numOfPages = numOfPages;
    displayBooks(library);
    clearInputs();
}

function displayBooks(library) {
    tbody.html("");
    for (let book of library) {
        tbody.append(`
                <tr>
                    <td>${book.id}</td>
                    <td>${book.title}</td>
                    <td>${book.isbn}</td>
                    <td>${book.author}</td>
                    <td>${book.genre}</td>
                    <td>${book.yearOfPublish}</td>
                    <td>${book.numOfPages}</td>
                    <td style="width: 8%;">
                    <a class="btn btn-sm btn-success" id="edit_${book.id}" onclick="fillInputsForEdit(this)"><i class="fa fa-pencil"></i></a> 
                    <a class="btn btn-sm btn-danger" id="delete_${book.id}" onclick="deleteBook(this)"><i class="fa fa-trash"></i></a>
                    </td>
                </tr>
        `)
    }
}

function generateId() {
    return idCounter += 1;
}

function validate(title, isbn, author, genre, yearOfPublish, numOfPages) {
    if (title === "" || isbn === "" || author === "" || genre === "" || yearOfPublish === "" || numOfPages === "") {
        return {
            succeeded: false,
            message: "All input fields are required! Please fill them!"
        }
    }
    else if (title.length < 5) {
        return {
            succeeded: false,
            message: "The title of the book should be at least 5 characters long!"
        }
    }
    return {
        succeeded: true,
        message: ""
    }
}

function clearInputs() {
    titleInput.val("");
    isbnInput.val("");
    authorInput.val("");
    genreInput.val("");
    yearOfPublish.val("");
    numOfPages.val("");
}

function fillInputs(title, isbn, author, genre, yearOfPublish, numOfPages, book) {
    title.val(book.title);
    isbn.val(book.isbn);
    author.val(book.author);
    genre.val(book.genre);
    yearOfPublish.val(book.yearOfPublish);
    numOfPages.val(book.numOfPages);
}

function fillInputsForEdit(sender) {
    let bookId = sender.id.split("_")[1];
    let book = library[bookId - 1];
    fillInputs(titleInput, isbnInput, authorInput, genreInput, yearOfPublish, numOfPages, book);
    editedBook.shouldSave = false;
    editedBook.bookId = bookId;
}

function deleteBook(sender) {
    let bookId = parseInt(sender.id.split("_")[1]);
    let book = library.find(x => x.id === bookId);

    const libraryFiltered = library.filter(x => x.id !== book.id);
    library = libraryFiltered;
    displayBooks(library);
}

displayBooks(library);

saveBtn.click(function () {
    let validateResult = validate(titleInput.val(), isbnInput.val(), authorInput.val(), genreInput.val(), yearOfPublish.val(), numOfPages.val());
    if (validateResult.succeeded) {
        if (editedBook.shouldSave) {
            let newBook = new Book(generateId(), titleInput.val(), isbnInput.val(), authorInput.val(), genreInput.val(), yearOfPublish.val(), numOfPages.val());
            addBook(newBook);
            displayBooks(library);
            clearInputs(titleInput, isbnInput, authorInput, genreInput, yearOfPublish, numOfPages);
            result.html(`* <p style="color:green">${newBook.title} succesfully added in the database!</p>`);
        } else {
            editBook(editedBook.bookId, titleInput.val(), isbnInput.val(), authorInput.val(), genreInput.val(), yearOfPublish.val(), numOfPages.val());
            result.html(`* <p style="color:green">Book succesfully edited!</p>`);
        }
    }
    else {
        result.html(`* <p style="color:red">${validateResult.message}</p>`);
    }
})

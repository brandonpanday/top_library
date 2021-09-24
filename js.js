// Initialize variables
let myLibrary = [];
let bookTitle;
let bookAuthor;
let bookPages;
let bookOne;

// Book constructors
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Get input and add book to library
function addBookToLibrary() {
    bookTitle = document.getElementById('title').value;
    bookAuthor = document.getElementById('author').value;
    bookPages = parseInt(document.getElementById('pages').value);
    
    bookOne = new Book(bookTitle, bookAuthor, bookPages);

    myLibrary.push(bookOne);
    
    console.log(myLibrary);
}

// Add books to Library
function presetBooks() {
    bookTwo = new Book("Book", "Author", 100);
    myLibrary.push(bookTwo);
    myLibrary.push(bookTwo);
    myLibrary.push(bookTwo);
    console.log(myLibrary);
}
window.onload = presetBooks();


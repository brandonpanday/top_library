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
    
    bookNew = new Book(bookTitle, bookAuthor, bookPages);

    myLibrary.push(bookNew);
    
    console.log(myLibrary);
}

// Loop through array and add books
function displayBooks() {
    let container = document.getElementById('container');   

    myLibrary.forEach(element => {
        console.log(`Title: ${element.title} Author: ${element.author} Pages: ${element.pages} added.`);
        let newBook = document.createElement('div');
        let cardTitle = document.createElement('p');
        cardTitle.innerHTML += element.title;
        let cardAuthor = document.createElement('p');
        cardAuthor.innerHTML += element.author;
        let cardPages = document.createElement('p');
        cardPages.innerHTML += element.pages;
        newBook.className = 'bookCard';
        newBook.append(cardTitle, cardAuthor, cardPages); 
        container.appendChild(newBook);

    })
}


// Add books to Library
function presetBooks() {
    bookOne = new Book("Book One", "Author 1", 101);
    bookTwo = new Book("Book Two", "Author 2", 102);
    bookThree = new Book("Book Three", "Author 3", 103);
    myLibrary.push(bookOne);
    myLibrary.push(bookTwo);
    myLibrary.push(bookThree);
    console.log(myLibrary);
}
window.onload = presetBooks();

// initialize variables
let myLibrary = [];
let bookTitle;
let bookAuthor;
let bookPages;
let bookRead;
let count = 0;


// Book constructor
function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read == 'true')
        this.read = true;
    if (read == 'false')
        this.read = false;
    this.id = count;
    
}


// Fn get input and add book to library
function createBookObj() {
    bookTitle = document.getElementById('title').value;
    bookAuthor = document.getElementById('author').value;
    bookPages = parseInt(document.getElementById('pages').value);
    bookRead = document.querySelector('input[name="read"]:checked').value;

    // create new Book object
    bookNew = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    
    // push object to Library array
    myLibrary.push(bookNew);
    
    // print library
    console.log(myLibrary);
}

// add Book div to DOM
function addBooktoDom() {
    let newBook = document.createElement('div');
    let cardTitle = document.createElement('p');
    cardTitle.innerHTML += bookNew.title;
    let cardAuthor = document.createElement('p');
    cardAuthor.innerHTML += bookNew.author;
    let cardPages = document.createElement('p');
    cardPages.innerHTML += bookNew.pages;
    let cardDel = document.createElement('button');
    cardDel.className = 'deleteBtn';
    cardDel.innerHTML = 'Delete';
    cardDel.addEventListener("click", deleteCard);

    // assign style to card
    newBook.className = 'bookCard';
    newBook.id = count;

    // append card to container
    newBook.append(cardTitle, cardAuthor, cardPages, cardDel); 
    container.appendChild(newBook);
    count ++;
}

// loop through array and add books
function getBooks() {
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

        let cardDel = document.createElement('button');
        cardDel.className = 'deleteBtn';
        cardDel.innerHTML = 'Delete';
        cardDel.addEventListener("click", deleteCard);

        newBook.className = 'bookCard';
        newBook.append(cardTitle, cardAuthor, cardPages, cardDel); 
        container.appendChild(newBook);
    })
}

window.onload = getBooks();

function addBook() {
    createBookObj();
    addBooktoDom();
}

function toggleAdd() {
    let bookForm = document.getElementById('bookForm');
    let container = document.getElementById('container');

    if (bookForm.style.display == 'block') {
        bookForm.style.display = 'none';
        container.style.opacity = '1';
    }
    else {
        bookForm.style.display = 'block';
        container.style.opacity = '0.5';
    }
}

// delete from DOM
function deleteCard(e) {
    let btn = e.target.parentNode;
    console.log(btn);
    myLibrary.splice(btn.id, 1);
    btn.remove();
    
 }
 
// initialize variables
let myLibrary = [];


// Book constructor
// function Book(title, author, pages, read, id) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     if (read == 'true')
//         this.read = true;
//     if (read == 'false')
//         this.read = false;
//     this.id = id;
    
// }

class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        if (read == 'true')
            this.read = true;
        if (read == 'false')
            this.read = false;
        this.id = id;
    }

    
}

function loopStorage(item) {
    let x = 0;
    Object.keys(localStorage).forEach(key => {
        console.log(localStorage.getItem(key));
        let bk = JSON.parse(localStorage.getItem(key));
        if (item == bk.id)
        x = 1;
    })
    return x;
}

// Fn get input and add book to library
function createBookObj() {
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPages = parseInt(document.getElementById('pages').value);
    let bookRead = document.querySelector('input[name="read"]:checked').value;
    let bookId = `${bookTitle}-${bookAuthor}-${bookPages}`;

    let x = loopStorage(bookId);

    if (x == 0) {
        bookNew = new Book(bookTitle, bookAuthor, bookPages, bookRead, bookId);
        localStorage.setItem(bookId, JSON.stringify(bookNew));
        addBooktoDom(bookNew);
    }
    else {
        alert("Book already exists");
    }
}

// add Book div to DOM
function addBooktoDom(obj) {
    let newBook = document.createElement('div');
    let cardTitle = document.createElement('p');
    cardTitle.innerHTML += obj.title;
    let cardAuthor = document.createElement('p');
    cardAuthor.innerHTML += obj.author;
    let cardPages = document.createElement('p');
    cardPages.innerHTML += obj.pages;
    let cardDel = document.createElement('button');
    cardDel.className = 'deleteBtn';
    cardDel.innerHTML = 'Delete';
    cardDel.addEventListener("click", deleteCard);

    // assign style to card
    newBook.className = 'bookCard';
    newBook.id = obj.id;
    cardTitle.className = 'cardTitle';
    cardAuthor.className = 'cardAuthor';
    cardPages.className = 'cardPages';

    // append card to container
    newBook.append(cardTitle, cardAuthor, cardPages, cardDel); 
    container.appendChild(newBook);
}

window.onload = storageAvailable();
window.onload = getBooks();

// loop through array and add books
function getBooks() {
    let container = document.getElementById('container');   
    Object.keys(localStorage).forEach(key => {
        console.log(localStorage.getItem(key));
        let bk = JSON.parse(localStorage.getItem(key));
        addBooktoDom(bk);
    })
}

function toggleAdd() {
    let bookForm = document.getElementById('bookForm');
    let container = document.getElementById('container');
    bookForm.style.display = 'block';
    container.style.opacity = '0.5';
}

document.getElementById('formClose').addEventListener("click", function() {
    let bookForm = document.getElementById('bookForm');
    let container = document.getElementById('container');
    bookForm.style.display = 'none';
    container.style.opacity = '1';
})

// delete from DOM
function deleteCard(e) {
    let btn = e.target.parentNode;
    console.log(btn);

    Object.keys(localStorage).forEach(key => {
        console.log(localStorage.getItem(key));
        let bk = JSON.parse(localStorage.getItem(key));
        if (btn.id == bk.id)
            localStorage.removeItem(bk.id);
    })

    btn.remove();
    
 }

  // Local Storage Check
  function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        console.log("LocalStorage enabled.");
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTE_REACHED') &&
            (storage && storage.length !== 0);
    }
}
 
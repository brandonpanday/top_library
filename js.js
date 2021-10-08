// initialize variables
let myLibrary = [];


// Book constructor
function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read == 'true')
        this.read = true;
    if (read == 'false')
        this.read = false;
    this.id = id;
    
}



function checkArray(str) {
    let x = 0;
    myLibrary.forEach(obj => {
        if (str == obj.id) {
            console.log("EXISTS");
            x = 1;
        }
    })

    return x;
}

// Fn get input and add book to library
function createBookObj() {
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPages = parseInt(document.getElementById('pages').value);
    let bookRead = document.querySelector('input[name="read"]:checked').value;
    let bookData = `${bookTitle}-${bookAuthor}-${bookPages}`;

    let yesNo = checkArray(bookData);
    if (yesNo == 0) {
        bookNew = new Book(bookTitle, bookAuthor, bookPages, bookRead, bookData);
        addBooktoDom(bookNew);
        myLibrary.push(bookNew);
    } else alert("Book already exists");
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

    // append card to container
    newBook.append(cardTitle, cardAuthor, cardPages, cardDel); 
    container.appendChild(newBook);
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
    let btn = e.target.parentNode.id;
    console.log(btn);
    myLibrary.splice(btn, 1);
    btn.remove();
    
 }
 
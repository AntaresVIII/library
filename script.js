const bookList = document.getElementById('book-list');
const addBook = document.getElementById('add');
const bookForm = document.getElementById('form');
const createBook = document.getElementById('newBook');


const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
};

function deleteBook(id) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id === id) {
        myLibrary.splice(i, 1);
        break;
        }
    };

    updateList();
};

Book.prototype.toggleRead = function () {
    if (this.read) { !this.read };
    else { this.read };
  
    updateList();
  };

function updateList() {
    bookList.innerHTML = ""; // Prevents list from duplicating all books already being displayed.

    myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');

    bookCard.innerHTML = `
    <div class="book-title">${book.title}</div>
    <div class="book-author">by ${book.author}</div>
    <div class="book-pages">${book.pages}</div>
    <div class="book-read">${book.read}</div>
    <div class="read-status">Read or not?</div>
    <div class="book-delete" data-uid=${book.id}>Delete</div>
    `;

    Book.prototype = 

    const deleteButton = bookCard.querySelector(".book-delete");

    deleteButton.addEventListener("click", () =>
    deleteBook(book.id)
    );

    bookList.appendChild(bookCard);
    })
};

addBook.addEventListener('click', () => {
    if (bookForm.style.display === 'none' || bookForm.style.display === '') {
        bookForm.style.display = 'block';
        addBook.textContent = 'Cancel';
    } else {
        bookForm.style.display = 'none';
        addBook.textContent = 'Add Book';

        const inputs =  bookForm.querySelectorAll('input');
        inputs.forEach(input => input.value = '');

    }
});

createBook.addEventListener('click', (event) => {
    event.preventDefault();

    const title = bookForm.title.value;
    const author = bookForm.author.value;
    const pages = bookForm.pages.value;
    const read = bookForm.read.checked ? "I have read it." : "Not read.";
    const id = crypto.randomUUID();
    
    if (title != 0 && author != 0 && pages != 0) {  // Checks whether any of the fields is left empty and prevents from posting. 
    const newBook = new Book(title, author, pages, read, id);
    myLibrary.push(newBook);
    updateList();
    }
    else ( alert("You need to fill up the entire form!") );

});



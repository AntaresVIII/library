const bookList = document.getElementById('book-list');
const addBook = document.getElementById('add');
const bookForm = document.getElementById('form');
const createBook = document.getElementById

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    addBook.addEventListener('click', function(event) {
        event.preventDefault();

        const title = bookForm.title.value;
        const author = bookForm.author.value;
        const pages = bookForm.pages.value;
        const read = bookForm.pages.value;

        const createBook = new Book(title, author, pages, read);
        myLibrary.push(Book);
        console.log(myLibrary);
    });
}

myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');

    bookCard.innerHTML = `
    <div class="book-title">${book.title}</div>
    <div class="book-author">by ${book.author}</div>
    <div class="book-pages">${book.pages}</div>
    <div class="book-read">${book.read}</div>
    `;

    bookList.appendChild(bookCard);
});

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
const bookList = document.getElementById('book-list');

const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: "A lot",
        read: undefined,
    },
    {
        title: "The Mysterious Island",
        author: "Jules Verne",
        pages: "A lot",
        read: undefined,
    }
];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');

    bookCard.innerHTML = `
    <div class="book-title">${book.title}</div>
    <div class="book-author">by ${book.author}</div>
    <div class="book-pages">${book.pages}</div>
    `;

    bookList.appendChild(bookCard);


});
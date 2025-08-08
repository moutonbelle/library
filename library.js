function Book (title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? "read." : "not yet read."}`;
};

const myLibrary = [];

function addBookToLibrary (title, author, pages, read) {
    let newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1254, true);

console.log(myLibrary);
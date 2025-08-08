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
const libraryDisplay = document.querySelector("#library");

function addBookToLibrary (title, author, pages, read) {
    let newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1254, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 4562, true);
addBookToLibrary("The Wandering Inn", "Pirateaba", 10572, false);

myLibrary.forEach((book) => {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book");

    Object.keys(book).forEach(property => {
        let newProperty = document.createElement("p");
        newProperty.classList.add("book-property");

        let newPropertyName = document.createElement("span");
        newPropertyName.classList.add("book-property-name");
        newPropertyName.textContent = property + ":";

        let newPropertyValue = document.createElement("span");
        newPropertyValue.classList.add("book-property-value");
        newPropertyValue.textContent = " "+ book[property];

        newProperty.append(newPropertyName, newPropertyValue);
        bookCard.append(newProperty);
    });

    libraryDisplay.appendChild(bookCard);
});
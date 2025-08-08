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
    return newBook;
}

addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1254, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 4562, true);
addBookToLibrary("The Wandering Inn", "Pirateaba", 10572, false);

myLibrary.forEach((book) => displayBook(book));

function displayBook (book) {
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
}

function resetForm () {
    document.querySelector("input#title").value = "";
    document.querySelector("input#author").value = "";
    document.querySelector("input#pages").value = "";
    document.querySelector("input#true").checked = false;
    document.querySelector("input#false").checked = false;
}

document.querySelector("button#add-book").addEventListener("click", () => {
    if (document.querySelector("form").style.display == "none") document.querySelector("form").style.display = "flex";
    else document.querySelector("form").style.display = "none";
});

document.querySelector("button#submit").addEventListener("click", () => {
    let title = document.querySelector("input#title").value;
    let author = document.querySelector("input#author").value;
    let pages = document.querySelector("input#pages").value;
    let read = document.querySelector("input#true").checked ? true : false;

    displayBook(addBookToLibrary(title, author, pages, read));
    resetForm();
})

document.querySelector("form").addEventListener("submit", e => e.preventDefault());
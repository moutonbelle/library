function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? "read." : "not yet read."}`;
};

let lotr = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1254, true);

console.log(lotr.info());
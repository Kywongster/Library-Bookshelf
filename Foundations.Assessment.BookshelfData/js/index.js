// IMPORT BOOKDATA ARRAY
import { bookData } from "./book-data.js";

// BOOK CLASS WITH ALL PROPERTIES
// CREATE LIST ELEMENT THAT TAKES ALL PROPERTIES OF THE BOOK
// CREATE RENDER METHOD THAT CREATS LIST ELEMENT FOR BOOK PROPERTIES
class Book {
  constructor(author, language, subject, title) {
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
  }
  render() {
    const bookElement = document.createElement("li");
    bookElement.innerHTML = `<h3>${this.title}</h3>
      <p>Author: ${this.author}</p>
      <p>Subject: ${this.subject}</p>
      <p>Language: ${this.language}</p>`
    return bookElement;
  }
}

// BOOKSHELF CLASS W/ EMPTY ARRAY 
// METHOD THAT TAKES IN BOOK AND PUSHING INTO AN ARRAY
// CREATE UNORDERED LIST FOR EACH INSTANCE OF BOOK IN AN ARRAY
class Bookshelf {
  constructor() {
    this.booksArr = [];
  }
  addBook(bookProp) {
    this.booksArr.push(bookProp);
  }
  render() {
    const bookshelfElement = document.createElement("ul");
    for (let i = 0; i < this.booksArr.length; i++) {
      let book = this.booksArr[i];
      const bookElement = book.render();
      bookshelfElement.appendChild(bookElement);
    }
    return bookshelfElement;
  }
}

// CREATE A FOR LOOP THAT GOES THROUGH EACH INDEX OF THE BOOKDATA ARRAY
// CREATE A VARIBLE SET TO NEW INSTANCE OF BOOK FOR EACH INDEX OF THE ARRAY
// USE THE VARIBLE IN ADDBOOK METHOD TO PUSH INTO AN ARRAY
const bookshelf = new Bookshelf();
for (let i = 0; i < bookData.length; i++) {
  const bookProp = new Book(
    bookData[i].author,
    bookData[i].language,
    bookData[i].subject,
    bookData[i].title
  );
  bookshelf.addBook(bookProp);
}

// SELECT DIV, CALL THE RANDER METHOD AND APPEND TO DIV
const bookshelfDiv = document.body.querySelector(".bookshelf");
const bookshelfElement = bookshelf.render();
bookshelfDiv.appendChild(bookshelfElement);

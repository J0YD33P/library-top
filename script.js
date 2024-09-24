const addBookButton = document.querySelector(".add-book");
const bookDetailsContainer = document.querySelector(".book-details-container");
const bookForm = document.querySelector(".book-details-container");


function Book(title, author, pages, readBook){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBook = readBook;
}

Book.prototype.checkRead = function(){
    if (this.readBook === 'yes'){
        return "read.";
    }
    else{
        return "not read yet.";
    }
}

Book.prototype.info = function(){
    console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.checkRead()}`);
}

function addBookLibrary(book){
    const newBookDetails = document.createElement("div");
    newBookDetails.textContent = book.title;
    newBookDetails.textContent = book.author;
    newBookDetails.textContent = book.pages;
    newBookDetails.textContent = book.readBook;
    newBookDetails.style.backgroundColor = "rgb(244, 230, 214)";
    newBookDetails.style.padding = "2em";
    newBookDetails.style.borderRadius = "10px";

    const bookGrid = document.querySelector(".book-grid");
    bookGrid.append(newBookDetails);
}

addBookButton.addEventListener("click", () =>{
    bookDetailsContainer.style.display = 'flex';
});

bookForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    bookDetailsContainer.style.display = 'none';

    const bookTitle = document.querySelector("#title").value;
    const bookAuthor = document.querySelector("#author").value;
    const bookPage = document.querySelector("#page").value;
    const bookCheckRead = document.querySelectorAll('input[name="radio-check"]');
    let checkSelected;

    bookCheckRead.forEach(radio => {
        if(radio.checked){
            checkSelected = radio.value;
        }
    });

    let book = new Book(bookTitle, bookAuthor, bookPage, checkSelected);
    book.info();
    addBookLibrary(book);

    bookForm.reset();
});
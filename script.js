const myLibrary = [];
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


const bookGrid = document.querySelector(".book-grid");

function addBookLibrary(book){
    const newBookCard = document.createElement("div");
    newBookCard.classList.add("new-book-card"); // Created for accessing the CSS styling
    newBookCard.dataset.array = myLibrary.length-1; // Adds custom data-array attribute to each book

    bookGrid.appendChild(newBookCard);
    
    const titleElement = document.createElement("h3");
    titleElement.textContent = `Title: ${book.title}`;
    
    const authorElement = document.createElement("h3");
    authorElement.textContent = `Author: ${book.author}`;
    
    const pageElement = document.createElement("h3");
    pageElement.textContent = `Pages: ${book.pages}`;

    const readButtonElement = document.createElement("button");
    if(book.readBook === 'yes'){
        readButtonElement.textContent = 'Read';
    }
    else{
        readButtonElement.textContent = 'Not Read';
        readButtonElement.classList.add("js-not-read-btn");
    }

    readButtonElement.classList.add('button', "js-read-btn");

    const removeButtonElement = document.createElement("button");
    removeButtonElement.textContent = 'Remove';
    removeButtonElement.classList.add('button', "js-remove-btn");

    newBookCard.append(titleElement, authorElement, pageElement, readButtonElement , removeButtonElement);
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
    myLibrary.push(book);
    book.info();
    addBookLibrary(book);

    bookForm.reset();
});

bookGrid.addEventListener("click", (event) =>{
    if(event.target.classList.contains("button")){
        if(event.target.textContent === 'Read'){
            event.target.textContent = "Not Read";
            event.target.classList.add("js-not-read-btn");
        } 
        else if(event.target.textContent === 'Not Read') {
            event.target.textContent = "Read";
            event.target.classList.remove("js-not-read-btn");
        }

        else{
            console.log(event.target.parentElement.dataset.array);               
        }
    }    
});
const addBook = document.querySelector(".add-book");
const bookDetailsContainer = document.querySelector(".book-details-container");
const bookForm = document.querySelector(".book-details-container");


function Book(title, author, pages, readBook){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBook = readBook;
    this.checkRead = function(){
        if (this.readBook === 'yes'){
            return "read.";
        }
        else{
            return "not read yet.";
        }

    }
    this.info = function(){
        console.log(`${title} by ${author}, ${pages}, ${this.checkRead()}`);
    }

}


addBook.addEventListener("click", () =>{
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

    const book1 = new Book(bookTitle, bookAuthor, bookPage, checkSelected);
    book1.info();
});
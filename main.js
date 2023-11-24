// stores the books
let library = [];

// create the book
function createBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let status = document.getElementById("status").value;

    let book = {
        title: title,
        author: author,
        pages: pages,
        status: status
    };

    // check if the book is a duplicate
    const isUnique = !library.some(existingBook => isTheSameBook(existingBook, book));
    if (isUnique) {
        library.push(book);
    }

    displayBooks();
}

// used for checking if two books are the same
function isTheSameBook(book1, book2) {
    if (book1.author === book2.author && book1.title === book2.title
        && book1.pages === book2.pages) {
            return true;
        }
    return false;
}

// add the book to the library
function addBook() {
    createBook();
    // alert("He");
    closeForm();
}

// display the books
function displayBooks() {
    // Get the book grid container
    let bookGrid = document.getElementById("book-grid");

    // Clear existing content in the grid
    bookGrid.innerHTML = "";

    // Loop through the booksArray and create HTML for each book
    library.forEach(book => {
        let bookDiv = document.createElement("div");
        bookDiv.className = "book";

        let titleDiv = document.createElement("div");
        titleDiv.className = "book-text";
        titleDiv.textContent = "Title: " + book.title;

        let authorDiv = document.createElement("div");
        authorDiv.className = "book-text";
        authorDiv.textContent = "Author: " + book.author;

        let pagesDiv = document.createElement("div");
        pagesDiv.className = "book-text";
        pagesDiv.textContent = "Pages: " + book.pages;

        let statusButton = document.createElement("button");
        statusButton.className = "book-button";
        statusButton.textContent = book.status;
        // change the colour depending on the status
        if (book.status != "Read") {
            statusButton.id = "book-status-not-read";
        } else {
            statusButton.id = "book-status";
        }
        statusButton.addEventListener("click", () => changeBookStatus(book));

        let removeButton = document.createElement("button");
        removeButton.id = "book-remove";
        removeButton.className = "book-button";
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeBook(book));


        bookDiv.appendChild(titleDiv);
        bookDiv.appendChild(authorDiv);
        bookDiv.appendChild(pagesDiv);
        bookDiv.appendChild(statusButton);
        bookDiv.appendChild(removeButton);

        bookGrid.appendChild(bookDiv);
    });
}


function toggleForm() {
    var form = document.getElementById("myForm");
    form.style.display = (form.style.display === "none") ? "block" : "none";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// remove book from the library
function removeBook(book) {
    library = library.filter(bookToCheck => bookToCheck.title != book.title
        || bookToCheck.author != book.author || bookToCheck.pages != book.pages);

    displayBooks();

    
}


// change the status of the book
function changeBookStatus(book) {
    if (book.status === "Read") {
        book.status = "Not Read";
    } else {
        book.status = "Read";
    }

    displayBooks();
}
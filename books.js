const myLibrary = [];
var num = 0;
const form = document.getElementById('form');
const addBook = document.getElementById('add-book');
const editBook = document.getElementById('edit-book');
const formWrapper = document.getElementById('form-wrapper');
const bookDB = document.getElementById('book-db');
const bookDBy = document.getElementById('book-db-y');
const bookDBn = document.getElementById('book-db-n');
const formSubmit = document.getElementById('submit');

addBook.addEventListener('click', (MouseEvent) => {
  formWrapper.setAttribute('class', '');
  addBook.toggleAttribute('disabled', true);
  bookDB.setAttribute('class', 'hidden');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formInput = new FormData(form);
  const event = Object.fromEntries(formInput);
  addBookToLibrary(event);
});

// Add new book to library and reset form
function addBookToLibrary(event) {
  formWrapper.toggleAttribute('disabled', true);
  addBook.toggleAttribute('disabled', false);

  myLibrary.push(event);
  console.log(myLibrary);

  const bookEntry = document.createElement('div');
  bookEntry.className = 'book';
  bookEntry.textContent = Object.values(event)[0];
  bookEntry.textContent += ' by ' + Object.values(event)[1];
  const bookEntryPages = document.createElement('div');
  if ( Object.values(event)[2] > 0 ){
    bookEntryPages.textContent = ' (' + Object.values(event)[2] + ' pages)';
    bookEntryPages.className = 'book-pgs';
  }
  bookEntry.appendChild(bookEntryPages);
  const rmEntry = document.createElement('span');
  rmEntry.className = 'rm-book';
  rmEntry.textContent = 'X';
  if ( Object.values(event)[3] == 'true' ) {
    bookEntry.appendChild(rmEntry);
    bookDBy.appendChild(bookEntry);
  } else {
    bookEntry.appendChild(rmEntry);
    bookDBn.appendChild(bookEntry);
  }
  bookDB.setAttribute('class', '');

  document.forms[0].reset();

  if (myLibrary.length > 0){ enableTaskButtons(); }
  num++;
}

// Enable 'Edit' and 'Remove' buttons if book(s) exist(s)
function enableTaskButtons(){
  formWrapper.setAttribute('class', 'hidden');
  bookDB.toggleAttribute('disabled', false);
}


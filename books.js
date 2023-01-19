const myLibrary = [];
var num = 0;
const form = document.getElementById('form');
const addBook = document.getElementById('add-book');
const editBook = document.getElementById('edit-book');
const rmBook = document.getElementById('rm-book');
const formWrapper = document.getElementById('form-wrapper');
const bookDB = document.getElementById('book-db');
const formSubmit = document.getElementById('submit');

addBook.addEventListener('click', (MouseEvent) => {
  formWrapper.setAttribute('class', '');
  addBook.toggleAttribute('disabled', true);
  bookDB.toggleAttribute('disabled', true);
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
  bookEntry.textContent = Object.values(event);
  const rmEntry = document.createElement('span');
  rmEntry.className = 'rm-book';
  rmEntry.textContent = 'X';
  bookEntry.appendChild(rmEntry);
  bookDB.appendChild(bookEntry);

  document.forms[0].reset();

  if (myLibrary.length > 0){ enableTaskButtons(); }
  num++;
}

// Enable 'Edit' and 'Remove' buttons if book(s) exist(s)
function enableTaskButtons(){
  formWrapper.setAttribute('class', 'hidden');
  bookDB.toggleAttribute('disabled', false);
  editBook.toggleAttribute('disabled', false);
  editBook.addEventListener('click', (MouseEvent) => {
	// if edit book button clicked, add table of book database with additional options to modify entry
	console.log('editBook button activated');
  })

  rmBook.toggleAttribute('disabled', false);
  rmBook.addEventListener('click', (MouseEvent) => {
	// if remove book button clicked, show book db with options to remove entries
	console.log('rmBook button activated');
  })
}


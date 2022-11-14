let myLibrary = [];
const form = document.getElementById('form');
const addBook = document.getElementById('add-book');
const formWrapper = document.getElementById('form-wrapper');
const formSubmit = document.getElementById('submit');

addBook.addEventListener('click', MouseEvent => {
	formWrapper.setAttribute('class','');
	addBook.setAttribute('class', 'hidden');
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const formInput = new FormData(form);
	const entries = Object.fromEntries(formInput);
	addBookToLibrary(entries);
})

function addBookToLibrary(event){ 
	myLibrary.push(event);
	console.log(myLibrary);
	document.forms[0].reset();
	formWrapper.setAttribute('class', 'hidden');
	addBook.setAttribute('class', '');

}


let myLibrary = {};
const submitForm = document.getElementById('form');
const addBook = document.getElementById('add-book');
const formWrapper = document.getElementById('form-wrapper');

addBook.addEventListener('click', MouseEvent => {
	formWrapper.setAttribute('class','');
	addBook.setAttribute('class', 'hidden');
});

function Book() {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${title} by ${author}, ${pages} pages, ${read}`;
	}
}

function addBookToLibrary(event){ 
	const newBook = new Book();
	console.log(newBook);
	// newBook.title = event.title;
}


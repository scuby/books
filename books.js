let myLibrary = {'title'};
const submitForm = document.getElementById('submit');
submitForm.addEventListener('submit', (event) => {
	addBookToLibrary(event);
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
	const newBook = new Book.prototype;
	newBook.title = 
	// console.log(event.title);
	// console.log(event.author);
	// console.log(event.pages);
	// console.log(event.read);

	// console.log(this.title);
}


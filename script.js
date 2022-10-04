const bookShelf = document.querySelector('.book-shelf')
const add = document.querySelector('.add')

let myLibrary = []

// We call addBookToLibrary.
add.addEventListener('click', addBookToLibrary)

// The constructor function to create the book object.
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  // Asking the user and store the answas into this variables.
  let title = prompt('Title:')
  let author = prompt('Author:')
  let pages = prompt('Pages:')
  let read = prompt('Read (Y/N):')

  if (read.toLowerCase() !== 'y') {
    read = 'Planned';
  } else {
    read = 'Finished'
  }

  // If the user left a prompt it will error out.
  if (!title || !author || !pages || !read) {
    return alert('All the prompts should be filled!')
  }

  // Create a new object and store in this array
  myLibrary.push(new Book(title, author, pages, read))

  // Calling createBook function.
  // The first argument is getting the last object that has been created
  // with the code above.
  // The seconde argument is to get the index of the object.
  createBook(myLibrary[myLibrary.length - 1], (myLibrary.length - 1))
}

// This is the function that will create the book and set its informarions.
// The `book` argument we store in it a book object.
// The `index` argument we store in it a unique number for each book.
function createBook(book, index) {
  // Creating the book with the informarions that has been passed
  // using createBookDiv function.
  // in the `book` argument object.
  const div = createBookDiv('div', '', 'book', bookShelf)
  createBookDiv('div', book.title, 'book-title', div)
  createBookDiv('div', book.author, 'book-author', div)
  createBookDiv('div', book.pages, 'book-pages', div)
  createBookDiv('div', book.read, 'book-read', div)

  // We use the `index` number and store it in a data attribute in the button tag.
  const button = createBookDiv('button', 'Delete', 'book-delete', div)
  button.dataset.index = index.toString()
  // For each button we create we add and event listener.
  // Each time the uesr click the rmBook function activates with the index argument.
  button.addEventListener('click', () => {rmBook(index), false})
}

// Using this function we can create any div and return it.
// This is better so we avoid typing repetitive code each time we create an element.
function createBookDiv(elementType, elementText, elementClass, elementParent) {
  const element = document.createElement(elementType)
  element.textContent = elementText
  element.classList.add(elementClass)
  elementParent.appendChild(element)
  return element
}

// We pass the index and use it to splice the element from the array.
function rmBook(index) {
  myLibrary.splice(index, 1)
  // We call reLibrary to refresh the book-shelf
  // so the book the we spliced will be removed
  reLibrary()
}

// For refreshing the bookShelf
function reLibrary() {
  bookShelf.innerHTML = ''
  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i], i)
  }
}

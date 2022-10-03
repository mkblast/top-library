const bookShelf = document.querySelector('.book-shelf')
const add = document.querySelector('.add')

let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}


function addBookToLibrary() {
  let title = prompt('Title:')
  let author = prompt('Author:')
  let pages = prompt('Pages:')
  let read = prompt('Read (Y/N):')

  if (!title || !author || !pages || !read) {
    return alert('All the prompts should be filled!')
  }

  myLibrary.push(new Book(title, author, pages, read))

  bookShelf.innerHTML = ''
  myLibrary.forEach((book) => {
    const div = document.createElement('div')
    div.classList.add('book')
    bookShelf.appendChild(div)

    const title = document.createElement('div')
    title.textContent =book.title
    title.classList.add('book-title')
    div.appendChild(title)

    const author = document.createElement('div')
    author.textContent = book.author
    author.classList.add('book-author')
    div.appendChild(author)

    const pages = document.createElement('div')
    pages.textContent = book.pages
    pages.classList.add('book-pages')
    div.appendChild(pages)

    const isRead = document.createElement('input')
    isRead.setAttribute('type', 'checkbox')
    isRead.classList.add('book-read')
    if (read.toLowerCase() == 'y') {
      isRead.checked = true;
    }
    div.appendChild(isRead)
  })
}

add.addEventListener('click', addBookToLibrary)

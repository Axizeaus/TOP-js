let library = [] 

function Book(name, author, pages, isRead){
    this.name = name 
    this.author = author
    this.pages = pages 
    this.isRead = isRead
}

function createForm(id){
    
}

function addBook(e){
    addBookForm = document.getElementById('addBookForm');
    addBookForm.innerText = 'this is working'
    console.log(e)
}

const add_book_btn = document.getElementById('addBook');

add_book_btn.addEventListener('click', addBook);
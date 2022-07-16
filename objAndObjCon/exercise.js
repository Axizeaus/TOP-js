function Book(title, author, pages, hasRead){
    this.title = title
    this.author = author
    this.pages = pages 
    this.hasRead = hasRead  || false
    this.Read = () => {
        this.hasRead = true
    }

    this.info = () => {
        let readOrNot;
        if (this.hasRead === true){
            readOrNot = 'already read.'
        } else {
            readOrNot = 'not read yet.'
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readOrNot}`
    }
}

const book = new Book('the hobbit', 'J.R.R. Tolkien ', 295)
console.log(book.info())
book.Read()
console.log(book.info())
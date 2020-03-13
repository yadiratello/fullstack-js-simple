//clase de la coleccion Book
class BookService {

    constructor() {
        this.URI = '/api/books';
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const books = await response.json();
        return books;
    }

    //guardar
    async saveBook(book) {
        const response = await fetch(this.URI, {
            method:'POST',
            body: book
        });
        const data = await response.json();
        console.log(data);
    }

    async deleteBook(bookId) {
        const response = await fetch(`${this.URI}/${bookId}`,{
            headers:{
                'Content-Type':'application/json'
            },
            method: 'Delete'
        });
        const data = await response.json();
        console.log(data);
    }
}

export default BookService;
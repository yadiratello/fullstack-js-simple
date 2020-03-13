import BookService from './services/BookService';//importando la clase BookService
const bookService = new BookService();

import { format } from 'timeago.js';//importando el metodo format de la libreria timeago.js

//esta clase interactuara directamente con el navegador
class UI {

    //imprime los libros en pantalla
    async renderBooks() {
        const books = await bookService.getBooks();
        // console.log(books);
        //pintar los datos en el div del index
        const booksCardContainer = document.getElementById('books-cards');
        booksCardContainer.innerHTML = '';
        //recorrer los libros
        books.forEach(book => {
            const div = document.createElement('div');
            div.className = '';
            div.innerHTML =
                `<div class="card m-2">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${book.imagePath}" class="img-fluid" alt="">
                        </div>
                        <div class="col-md-8">
                            <div class="card-block px-2">
                                <h4 class="card-title">${book.title}</h4>
                                <p class="card-text">${book.author}</p>
                                <a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer w-100 text-muted">
                        ${format(book.created_at)}
                    </div>
                </div>`;
            booksCardContainer.appendChild(div);//agregando un nuevo hijo en el container
        });
    }

    //agrega un nuevo libro
    async addNewBook(book) {
        await bookService.saveBook(book);
        this.clearBookForm();
        this.renderBooks();
    }

    //limpiar el formulario
    clearBookForm() {
        document.getElementById('book-form').reset();
        document.getElementById('title').focus();
    }

    //enviar un mensaje 
    renderMessage(message, colorMessage, secondsToRemove) {
        //creo el div con su color y mensaje
        const div = document.createElement('div');
        div.className = `alert alert-${colorMessage}  message`;
        div.appendChild(document.createTextNode(message));
        //indico donde colocar el mensaje
        const container = document.querySelector('.col-md-4');
        const bookForm = document.querySelector('#book-form');
        container.insertBefore(div, bookForm);//antes del bookform coloca lo que hay en div

        //establesco un tiempo de duracion del mensaje
        setTimeout(() => {
            document.querySelector('.message').remove()
        }, secondsToRemove);
    }

    //elimina un libro de la pantalla
    async deleteBook(bookId) {
        await bookService.deleteBook(bookId);
        this.renderBooks();
    }
}

export default UI;
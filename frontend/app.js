// require('./styles/app.css');
import './styles/app.css';//importando la clas app.css
import UI from './UI';//importando la clase UI 

//al cargar el DOM
document.addEventListener('DOMContentLoaded', (e) => {
    const ui = new UI();
    ui.renderBooks();//listar los books
});

//al desencadenarse el evento submit
document.getElementById('book-form').addEventListener('submit', (e) => {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value,
        image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);

    const ui = new UI();//instancia de la clase UI
    ui.addNewBook(formData);//pasando los datos del form al metodo addNewBook

    ui.renderMessage('New Book Added','success',3000);

    // console.log(title,author,isbn,image);
    e.preventDefault();
});

//al hacer click en eliminar
document.getElementById('books-cards').addEventListener('click', (e) =>{
    if(e.target.classList.contains('delete')){
        const ui = new UI();
        ui.deleteBook(e.target.getAttribute('_id'));
        ui.renderMessage('Book deleted','danger',3000);
    }
    e.preventDefault();
});
//modulos
const { Router } = require('express'),
        router = Router(),
        BookModel = require('../models/Book'),
        {unlink} = require('fs-extra'),
        path = require('path');

//rutas
//listar 
router.get('/', async (req, res) => {
    const books = await BookModel.find();
    res.json(books);
});

//insertar
router.post('/', async (request, response) => {
    // console.log(request.body);
    const { title, author, isbn } = request.body;
    const imagePath = '/uploads/'+request.file.filename;
    const newBook = new BookModel({ title, author, isbn, imagePath });
    await newBook.save();//guardando el libro
    console.log(newBook);
    response.json({ message: "Book save" });
});

router.delete('/:id', async (req, res) => {
    // console.log(req.params.id);//obtiene el id
    const book = await BookModel.findByIdAndDelete(req.params.id);//eliminando el libro
    unlink(path.resolve('./backend/public'+book.imagePath));//eliminando la imagen de la carpta uploads
    console.log(book);
    res.json({message:'Book deleted'});
});

module.exports = router;
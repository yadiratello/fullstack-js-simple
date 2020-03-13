const { Schema, model } = require('mongoose');

//schema de la tabla Books
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    imagePath: { type: String},
    created_at: { type: Date, default: Date.now }
});

//exportando este modelo
module.exports = model('Book',bookSchema);
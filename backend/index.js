//si estamos en proceso de desarrollo
if(process.env.NODE_ENV === 'development'){
    require('dotenv').config();//permite leer los archivos .env
}

const express = require('express'),
    morgan = require('morgan'),
    multer = require('multer'),
    path = require('path'),
    cors = require('cors');

//inicializaciones
const app = express();
require('./database');


//configuraciones
// app.set('port', 3000);
app.set('port', process.env.PORT || 4000);


//middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    //ruta de destino de la imagen
    destination: path.join(__dirname, 'public/uploads'),
    filename(request, file, callback) {
        callback(null, new Date().getTime() + path.extname(file.originalname));//nombre de la imagen
    }
});
app.use(multer({storage}).single('image'));//single() <- se subirá una sola imagen a la vez
app.use(express.urlencoded({ extended: false }));//ayuda a extraer los datos del formulario del front como si fuera un json
app.use(express.json());//permite entender las peticiones ajax 
app.use(cors());//permite conectarse entre 2 srvidores

//routes
app.use('/api/books',require('./routes/books'));//localhost:3000/api/books


//Static Files (archivos publicos)
app.use(express.static(path.join(__dirname, 'public')));//lo q hay dentro de la carpeta public sera publico: localhost:3000/index.html


//inicializando el servidor
app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'));
});
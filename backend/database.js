const mongoose = require('mongoose');

//requiriendo las variables de entorno
// console.log(process.env.MONGODB_URI);

//conectando con mongodb
mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true })
        .then(db => console.log('Database is connected'))
        .catch(err => console.error(err));
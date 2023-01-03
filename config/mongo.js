const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (err) {
            console.log('Error de conexión:', err);
            return;
        } else {
            console.log('Base de datos conectada');
        }
    })
}

module.exports = { dbConnect }
const mongoose = require ('mongoose');


module.exports = (app) => {
    mongoose.connect('mongodb+srv://kraykov:64935747@cluster0.styjx.mongodb.net/cubicle?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', console.log.bind(console, 'DB connected.'));


}
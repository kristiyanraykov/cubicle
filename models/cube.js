const Model = require('./Model')

const mongoose = require('mongoose');

const cubeScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,

    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
})

// class Cube extends Model{
//     constructor(id, name, description, imageUrl, level){
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.level = level;

//     }


// }

module.exports = mongoose.model('Cube', cubeScheme);
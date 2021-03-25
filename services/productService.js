const Cube = require('../models/cube')
const uniqid = require ('uniqid')
const fs = require('fs')
const productsData = require('../products.json');
const path = require('path')
function getAll () {
    return productsData;
}
function getOne (id) {
    return productsData.find(x => x.id == id)
}
function createProduct (data) {
    let cube = new Cube(
        uniqid(), 
        data.name, 
        data.description, 
        data.imageUrl, 
        data.difficultyLevel
    );
    productsData.push(cube);

    fs.writeFile(path.join(__dirname + '/../products.json'), JSON.stringify(productsData), (err) => {
        if (err){
            console.log(err);
            return;
        }
    })

}

module.exports = {
    create: createProduct,
    getAll,
    getOne
}
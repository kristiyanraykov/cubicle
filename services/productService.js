const Cube = require('../models/cube')
const uniqid = require ('uniqid')
const fs = require('fs/promises')
const productsData = require('../products.json');
const path = require('path');
const { callbackify } = require('util');
function getAll () {
    return productsData;
}
function getOne (id) {
    return productsData.find(x => x.id == id)
}
function createProduct (data, callback) {
    let cube = new Cube(
        uniqid(), 
        data.name, 
        data.description, 
        data.imageUrl, 
        data.difficultyLevel
    );
    productsData.push(cube);

    // fs.writeFile(path.join(__dirname + '/../products.json'), JSON.stringify(productsData),callback)
        return fs.writeFile(path.join(__dirname + '/../products.json'), JSON.stringify(productsData))
}

module.exports = {
    create: createProduct,
    getAll,
    getOne
}
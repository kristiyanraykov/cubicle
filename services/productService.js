const Cube = require('../models/cube')
const uniqid = require ('uniqid')
const fs = require('fs/promises')
const path = require('path');

const productsData = require('../products.json');

function getAll (query) {
    let result = Cube.getAll();

    if(query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search))
    }
    if(query.from){
        result = result.filter(x => Number(x.level) >= query.from)
    }
    if(query.to){
        result = result.filter(x => Number(x.level) <= query.to)
    }
    return result;
}
function getOne (id) {
    return Cube.getOne(id);
}
function createProduct (data, callback) {
    let cube = new Cube(
        uniqid(), 
        data.name, 
        data.description, 
        data.imageUrl, 
        data.difficultyLevel
    );

    return cube.save()

}

module.exports = {
    create: createProduct,
    getAll,
    getOne
}
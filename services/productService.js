const Cube = require('../models/cube')
const fs = require('fs/promises')
const path = require('path');

const productsData = require('../products.json');

async function getAll (query) {
    // let result = Cube.getAll();
    let result = await Cube.find({}).lean();
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
async function getOne (id) {
    let cube = await Cube.findById(id).lean();
    return cube;
}
function createProduct (data) {
    let cube = new Cube(data);

    return cube.save()

}

module.exports = {
    create: createProduct,
    getAll,
    getOne
}
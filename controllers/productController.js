const { Router } = require('express');
const router = Router();
const productService = require('../services/productService')
router.get('/', (req, res) => {
    let products = productService.getAll();
    res.render('home', {title: 'Home', products})
});

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'})
});

router.get('/details/:productId', (req, res) => {
    let product = productService.getOne(req.params.productId);
    res.render('details', { ...product })
})

router.post('/create', (req, res) => {
    productService.create(req.body);

    res.redirect('/')
})

module.exports = router;
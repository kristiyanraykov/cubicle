const { Router } = require('express');
const router = Router();
const productService = require('../services/productService')
router.get('/', (req, res) => {
    res.render('home', {title: 'Home'})
});

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'})
});

router.get('/details/:productId', (req, res) => {
    res.render('details')
})

router.post('/create', (req, res) => {
    productService.create(req.body);
    
    res.redirect('/')
})

module.exports = router;
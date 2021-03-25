const { Router } = require('express');
const router = Router();
const productService = require('../services/productService')
router.get('/', (req, res) => {

    let products = productService.getAll(req.query);
    
    res.render('home', {title: 'Home', products})
});

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'})

});

router.post('/create', (req, res) => {
    // // productService.create(req.body, (err) => {
    // //     if(err) {
    //     //         return res.status(500).end();
    //     //     }
    //     res.redirect('/')
    // }

    productService.create(req.body)
    .then(()=> {
        res.redirect('/')
    })
}
);
router.get('/details/:productId', (req, res) => {
    let product = productService.getOne(req.params.productId);
    res.render('details', { ...product })
})



module.exports = router;
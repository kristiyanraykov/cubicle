const { Router } = require('express');
const router = Router();
const productService = require('../services/productService')
const accessoryService = require('../services/accessoryService')

router.get('/', (req, res) => {

    let products = productService.getAll(req.query)
    .then(products => {
        res.render('home', {title: 'Home', products})

    })

});

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'})

});

router.post('/create', (req, res) => {
    productService.create(req.body)
    .then(()=> {
        res.redirect('/')
    })
}
);
router.get('/details/:productId', async (req, res) => {
    let product = await productService.getOnewithAccessories(req.params.productId)

    res.render('details', { ...product })
})

router.get('/:productId/attach', async (req, res) => {
    let product = await productService.getOne(req.params.productId)
    let accessories = await accessoryService.getAll()


    res.render('attachAccessory', {product, accessories})
})

router.post('/:productId/attach', (req, res) => {
    productService.attachAccessory(req.params.productId, req.body.accessory)
    .then(() => res.redirect(`/details/${req.params.productId}`))

})



module.exports = router;
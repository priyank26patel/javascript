var router = require('express').Router()
var faker = require('faker')
var Product = require('../models/product')

router.get('/add-product', function(req, res, next) {
    res.render('main/add-product')
})

router.post('/add-product', function(req, res, next) {
  console.log('req.body',req.body)
    // var product = new Product()

    // product.category = req.body.category_name
    // product.name = req.body.product_name
    // product.price = req.body.product_price
    // product.cover = faker.image.image()

    // product.save(function(err) {
    //     if (err) throw err
    //     res.redirect('/add-product')
    // })
})

module.exports = router
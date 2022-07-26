const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle:"Add Product", 
        path: "/admin/add-product",
        formsCSS: true,
        productCSS: true,
        activeShop: false,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getAllProducts = (req, res, next) => {
    const title = "Shop"
    const products = Product.fetchAll();
    // res.sendFile(path.join(__dirname, '..','views','shop.pug'));
    res.render('shop',{
        prods:products,
        pageTitle: title,
        path: "/",
        hasProducts: products.length > 0,
        productCSS: true,
        formsCSS: true,
        activeShop: true,
        activeAddProduct: false
    });
}
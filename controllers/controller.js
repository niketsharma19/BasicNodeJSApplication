const Product = require("../models/Products");

exports.addProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.title).save();
  res
    .status(200)
    .send(`Product Added Successfully ${product.id} and ${product.title}`);
};

exports.getProduct = (req, res, next) => {
  console.log(req.params.productId);
  res.send(Product.fetch(req.params.productId));
};

exports.getAllProducts = (req, res, next) => {
  console.log(Product.fetchAll());
  res.status(200).send(Product.fetchAll());
};

exports.deleteProduct = (req, res, next) => {
  console.log(req.body);
  res.send(new Product(req.body.title).delete());
};

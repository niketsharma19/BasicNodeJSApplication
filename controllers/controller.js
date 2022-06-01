const Product = require("../models/Products");

exports.addProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.title).save();
  res
    .status(200)
    .send(`Product Added Successfully ${product.id} and ${product.title}`);
};

exports.getProduct = (req, res, next) => {
  console.log(`Query Params - ${req.query.id}`);
  console.log(`Query Params - ${req.query.health}`);
  console.log(`Path Params - ${req.params.productId}`);
  const product = Product.fetch(req.params.productId);
  res.send(product ? product : "Can not find the Product!!");
};

exports.getAllProducts = (req, res, next) => {
  console.log(Product.fetchAll());
  res.status(200).send(Product.fetchAll());
};

exports.deleteProduct = (req, res, next) => {
  console.log(req.body);
  res.send(new Product(req.body.title).delete());
};

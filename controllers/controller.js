const Product = require("../models/Products");

exports.addProduct = (req, res, next) => {
  console.log(req.body);
  new Product(req.body.title).save();
  res.status(200).send("Product Added Successfully");
};

exports.getAllProducts = (req, res, next) => {
  console.log(Product.fetchAll());
  res.send(Product.fetchAll());
};

exports.deleteProduct = (req, res, next) => {
  console.log(req.body);
  res.send(new Product(req.body.title).delete());
};

const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("In add-product!!");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  console.log("In product!!");
  res.redirect("/");
});

module.exports = router;

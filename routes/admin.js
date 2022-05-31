const express = require("express");

const controller = require("../controllers/controller");

const router = express.Router();

router.post("/add-product", controller.addProduct);

router.post("/delete-product", controller.deleteProduct);

exports.router = router;

// router.get("/add-product", (req, res, next) => {
//   console.log("In add-product!!");
//   // res.render("add-product", {
//   //   pageTitle: "Add Product",
//   //   path: "/admin/add-product",
//   //   formsCSS: true,
//   //   productCSS: true,
//   //   activeAddProduct: true,
//   // });
//   // res.sendFile(path.join(rootDir, "views", "add-product.html"));
//   res.send(
//     '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
//   );
// });

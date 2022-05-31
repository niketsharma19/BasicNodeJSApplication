const express = require("express");

const getAllProducts = require("../controllers/controller").getAllProducts;

const router = express.Router();

router.get("/get-all-products", getAllProducts);

module.exports = router;

// (req, res, next) => {
//   if (req.url !== "/favicon.ico") {
//     console.log("In /!!");
//     console.log(adminData.products);
//     res.send(adminData.products);

//     // res.render("shop", {
//     //   prods: products,
//     //   pageTitle: "Shop",
//     //   path: "/",
//     //   hasProducts: products.length > 0,
//     //   activeShop: true,
//     //   productCSS: true,
//     // });
//     // res.sendFile(path.join(rootDir, "views", "shop.html"));
//   }
// });

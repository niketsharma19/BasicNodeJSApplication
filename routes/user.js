const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  if (req.url !== "/favicon.ico") {
    console.log("In /!!");
    res.send("<h1>Product Added</h1>");
  }
});

module.exports = router;

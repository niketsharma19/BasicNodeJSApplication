const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  if (req.url !== "/favicon.ico") {
    console.log("In /!!");
    res.sendFile(path.join(rootDir, "views", "shop.html"));
    // res.send("<h1>Hello From Express</h1>");
  }
});

module.exports = router;

const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(userRouter);

app.use("/", (req, res, next) => {
  console.log("NOT FOUND");
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

app.listen(3000);

const express = require("express");

const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/admin", adminData.router);
app.use("/user", userRouter);

app.use("/", (req, res, next) => {
  console.log("NOT FOUND");
  res.status(404).send("Page Not Found!!!");
});

app.listen(3000);

// app.set("view engine", "ejs");
// app.set("views", "views");
// app.use(express.static(path.join(__dirname, "public")));

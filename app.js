const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(userRouter);

app.use("/", (req, res, next) => {
  res.status(404).send("<h2>Page Not Found</h2>");
});

app.listen(3000);

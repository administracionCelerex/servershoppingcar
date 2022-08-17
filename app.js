const express = require("express");
const app = express();
const port = 8000;
require("dotenv").config();
const mongoose = require("mongoose");
const ProductModel = require("./models/products");

const MONGOSERVER = process.env.MONGOSERVER;
const MONGODBNAME = process.env.MONGODBNAME;
const MONGOURI = `mongodb+srv://${MONGOSERVER}/${MONGODBNAME}`;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/products", (req, res) => {
  res.send("productos");
});
app.post("/products", (req, res) => {
  res.send("insert new product");
});

try {
  mongoose
    .connect(MONGOURI)
    .then((res) => {
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
} catch (e) {
  console.log(e);
}

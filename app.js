const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const ProductModel = require("./models/products");

const MONGOSERVER = process.env.MONGOSERVER;
const MONGODBNAME = process.env.MONGODBNAME;
const MONGOURI = `mongodb+srv://${MONGOSERVER}/${MONGODBNAME}`;

app.get("/", cors(), (req, res) => {
  res.send("Hello World!");
});
app.get("/products", cors(), (req, res) => {
  ProductModel.find()
    .then((products) => {
      console.log(products);
      //res.send("productos");
      res.json({ products: products }).status(200);
    })
    .catch((err) => console.log(err));
});
app.post("/products", cors(), (req, res) => {
  //res.send("insert new product");

  const product = new ProductModel({
    name: "Teclado",
    description: "jdkashdasd",
    price: 500,
  });

  product
    .save()
    .then((productInserted) => {
      res.json({ productInserted }).status(200);
    })
    .catch((err) => console.log(err));
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

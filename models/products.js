const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: String,
  description: String,
  price: Number,
});

module.exports = mongoose.model("shoppincarproducts", productsSchema);

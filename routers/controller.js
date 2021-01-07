const mongoose = require("mongoose");
const shortid = require("shortid");
//データベースのモデル
const Product = mongoose.model("Products", new mongoose.Schema({
   _id: { type: String, default: shortid.generate },
   title: String,
   description: String,
   image: String,
   price: Number,
   availableSizes: [String],

}))

module.exports = {
   getProducts: async (req, res) => {
      const products = await Product.find();
      res.status(200).json(products);
   },
   createProduct: async (req, res) => {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
   },
   deleteProduct: async (req, res) => {
      const deleteedProduct = await Product.findByIdAndDelete(req.params.id);
      res.status(200).json(deleteedProduct);
   }

}
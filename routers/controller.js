const mongoose = require("mongoose");
const shortid = require("shortid");
//mongoDB データベースのモデル
const Product = mongoose.model("Products", new mongoose.Schema({
   _id: { type: String, default: shortid.generate },
   title: String,
   description: String,
   image: String,
   price: Number,
   availableSizes: [String],

}))

const Order = mongoose.model("order", new mongoose.Schema({
   id: { type: String, default: shortid.generate },
   email: String,
   name: String,
   address: String,
   total: Number,
   cart: [
      {
         _id: String,
         title: String,
         price: Number,
         count: Number,
      },
   ]
},
   {
      timestamps: true,
   }
))

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
   },
   createOrder: async (req, res) => {
      if (!req.body) {
         res.status(400).json({ message: "データの不足" });
         return;
      }
      const order = new Order(req.body)
      const savedOrder = await order.save();
      res.status(200).json(savedOrder);
   },


}
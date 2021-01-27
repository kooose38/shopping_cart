const mongoose = require("mongoose");
const shortid = require("shortid");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
  })
);

const Order = mongoose.model(
  "NewOrder",
  new mongoose.Schema({
    order_id: { type: String, default: shortid.generate },
    name: String,
    email: String,
    address: String,
    created_at: String,
    updated_at: String,
    total: Number,
    count: Number,
    cartItem: [
      {
        _id: String,
        title: String,
        price: Number,
        count: Number,
      },
    ],
  })
);

module.exports = {
  getProducts: async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (err) {
      res.status(400).json({ meaasge: err.message });
    }
  },
  postProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const saveProduct = await newProduct.save();
      res.status(200).json(saveProduct);
    } catch (err) {
      res.status(400).json({ meaasge: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id;
      if (!id || id === "") {
        throw new Error("idが存在しません");
      }
      const deleteProduct = await Product.findByIdAndDelete(id);
      res.status(200).json(deleteProduct);
    } catch (err) {
      res.status(400).json({ meaasge: err.message });
    }
  },
  getOrder: async (req, res) => {
    const order = await Order.find({});
    res.json(order);
  },
  postOrder: async (req, res) => {
    try {
      if (!req.body) {
        throw new Error("bodyの不足です");
      }
      const newOrder = new Order(req.body);
      const saveOrder = await newOrder.save();
      res.status(200).json(saveOrder);
    } catch (err) {
      res.status(400).json({ meaage: err.message });
    }
  },
};

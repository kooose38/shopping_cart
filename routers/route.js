const express = require("express")
const router = express.Router();
const controller = require("./controller");

router
   .route("/api/products")
   .get(controller.getProducts)
   .post(controller.createProduct)

router
   .route("/api/products/:id")
   .delete(controller.deleteProduct)

router
   .route("/api/orders")
   .post(controller.createOrder)

module.exports = router;
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


module.exports = router;
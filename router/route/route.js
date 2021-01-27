const express = require("express");
const router = express.Router();
const controller = require("./controller");

router
  .route("/api/products")
  .get(controller.getProducts)
  .post(controller.postProduct);

router.route("/api/products/:id").delete(controller.deleteProduct);

router
  .route("/api/products/order")
  .post(controller.postOrder)
  .get(controller.getOrder);

module.exports = router;

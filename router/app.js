const express = require("express");
const app = express();
const PORT = process.env.PORT | 3001;
const routers = require("./route/route");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/react-shopping-cart-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  userUnifiedTopology: true,
});

app.use("/", routers);

app.listen(PORT, () => {
  console.log(`Listen on PORT:${PORT}`);
});

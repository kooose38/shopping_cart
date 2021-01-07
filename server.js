const express = require("express");
const mongoose = require("mongoose");
// const shortid = require("shortid");
const Router = require("./routers/route")
const PORT = process.env.PORT || 5000;

const app = express();

//body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/react-shopping-cart-db", {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
})


app.use("/", Router);

app.listen(PORT, () => {
   console.log("Listen on PORT", PORT);
})
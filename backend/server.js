const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes =
require("./routes/productRoutes");

const orderRoutes =
require("./routes/orderRoutes");

const contactRoutes =
require("./routes/contactRoutes");

const authRoutes =
require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected ✅");
})
.catch((err) => {
  console.log(err);
});

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/orders",
  orderRoutes
);

app.use(
  "/api/contact",
  contactRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.get("/", (req, res) => {
  res.send("Backend Running ");
});

app.listen(5000, () => {
  console.log(
    "Server Running On Port 5000"
  );
});
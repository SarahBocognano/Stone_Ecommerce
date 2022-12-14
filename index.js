const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection established"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/stripe", stripeRoute)

app.listen(process.env.PORT || 4000, () => {
  console.log("Backend Server is Running")
});


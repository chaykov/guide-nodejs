const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());
// app.use(express.urlencoded());

app.use(adminRoutes)
app.use(shopRoutes)

app.listen(3000, () => console.log("Server is running on port 3000"));
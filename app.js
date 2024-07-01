const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.json());
// app.use(express.urlencoded());

app.use('/admin/', adminData.routes)
app.use(shopRoutes)

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000, () => console.log("Server is running on port 3000"));
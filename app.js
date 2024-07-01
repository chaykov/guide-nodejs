const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const {engine} = require("express-handlebars");

const errorController = require("./controllers/error");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// engine settings for handlebars \/
// app.engine('hbs', engine({defaultLayout: 'main-layout', extname: "hbs", layoutsDir: "views/layouts/"}));
// app.set('view engine', 'hbs');
// app.set('views', 'views');

// engine settings for ejs \/
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(express.json());
// app.use(express.urlencoded());

app.use("/admin/", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000, () => console.log("Server is running on port 3000"));

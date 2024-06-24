const http = require("http");
const express = require("express");

const app = express();

app.use(() => {
  console.log("In the middleware");
});

const server = http.createServer(app);

server.listen(3000);

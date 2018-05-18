var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3500;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "/app/public/index.html")));


require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
    console.log("The times they are a changin")
});
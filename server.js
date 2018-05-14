var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3500;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
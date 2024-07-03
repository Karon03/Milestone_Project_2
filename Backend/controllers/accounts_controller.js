// const express = require('express')
// const accounts = express.Router()
// wiki.js - Wiki route module.

const express = require("express");
const accounts = express.Router();

// Home page route.
// accounts.get("/", function (req, res) {
//   res.send("Wiki home page");
// });

// About page route.
accounts.get("/accounts", function (req, res) {
//   res.render("About this tracker");
});

module.exports = accounts;

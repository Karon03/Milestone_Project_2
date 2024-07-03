const express = require("express");
const accounts = express.Router();


accounts.get("/", function (req, res) {
    res.status(200).json({"message":"success"})
});

module.exports = accounts;

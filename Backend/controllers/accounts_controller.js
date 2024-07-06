const express = require("express");
const accounts = express.Router();
const db = require('../models')
const { account } = db


// FIND ALL ACCOUNTS
accounts.get('/', async (req, res) => {
    try {
        const foundAccounts = await account.findAll()
        res.status(200).json(foundAccounts)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = accounts;

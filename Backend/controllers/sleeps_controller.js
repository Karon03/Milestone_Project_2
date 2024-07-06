const express = require("express");
const sleeps = express.Router();
const db = require('../models')
const { sleep } = db


// FIND ALL SLEEPS
sleeps.get('/', async (req, res) => {
    try {
        const foundSleeps = await sleep.findAll()
        res.status(200).json(foundSleeps)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = sleeps;

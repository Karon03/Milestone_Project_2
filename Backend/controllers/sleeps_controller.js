const express = require("express");
const sleeps = express.Router();
const db = require('../models')
const { sleep } = db


// FIND ALL SLEEP LOGS
sleeps.get('/', async (req, res) => {
    try {
        const foundSleeps = await sleep.findAll()
        res.status(200).json(foundSleeps)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC SLEEP LOG
sleeps.get('/:id', async (req, res) => {
    try {
        const foundSleep = await sleep.findOne({
            where: { sleep_id: req.params.id }
        })
        res.status(200).json(foundSleep)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A SLEEP LOG
sleeps.post('/', async (req, res) => {
    try {
        const newSleep = await Sleep.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new sleep log',
            data: newSleep
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = sleeps;

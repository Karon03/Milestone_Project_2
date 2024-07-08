const router = require('express').Router()
const db = require('../models')
const { Sleep } = db


// FIND ALL SLEEP LOGS
router.get('/', async (req, res) => {
    // const data = await sleep.findAll()
    // res.json(data)
    try {
        const foundSleeps = await Sleep.findAll()
        res.status(200).json(foundSleeps)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC SLEEP LOG
router.get('/:id', async (req, res) => {
    try {
        const foundSleep = await Sleep.findOne({
            where: { sleep_id: req.params.id }
        })
        res.status(200).json(foundSleep)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A SLEEP LOG
router.post('/', async (req, res) => {
    console.log("!!!")
    console.log(req.body)
    try {
        const newSleep = await Sleep.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new sleep log',
            data: newSleep
        })
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})




module.exports = router;

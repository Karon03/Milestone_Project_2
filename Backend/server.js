// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Somnus Sleep Tracker'
    })
})
// Routes

const accountsController = require('./controllers/accounts_controller')
app.use('/account', accountsController)

const sleepsController = require('./controllers/sleeps_controller')
app.use('/sleep', sleepsController)

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Somnus Sleep Tracker'
    })
})
// Routes

const accountsController = require('./controllers/accounts_controller')
app.use('/account', accountsController)

const sleepController = require('./controllers/sleep_controller')
// app.use('/sleep', sleepController)

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })
  
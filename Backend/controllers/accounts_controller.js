const router = require('express').Router()
const db = require('../models')
const { account } = db


// FIND ALL ACCOUNTS
router.get('/', async (req, res) => {
    try {
        const foundAccounts = await account.findAll()
        res.status(200).json(foundAccounts)
    } catch (error) {
        res.status(500).json(error)
    }
})


// CREATE AN ACCOUNT
router.post('/', async (req, res) => {
    try {
        const newAccount = await account.create(req.body)
        res.status(200).json({
            message: 'Successfully created new account',
            data: newAccount
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE AN ACCOUNT
router.put('/:id', async (req, res) => {
    try {
        const updatedAccount = await account.update(req.body, {
            where: {
                account_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedAccount} account(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// DELETE A BAND
router.delete('/:id', async (req, res) => {
    try {
        const deletedAccount = await account.destroy({
            where: {
                account_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedAccount} account(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router;

const router = require('express').Router()
const db = require('../models')
const { Account } = db


// FIND ALL Accounts
router.get('/', async (req, res) => {
    try {
        const foundAccounts = await Account.findAll()
        res.status(200).json(foundAccounts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Account
router.get('/:id', async (req, res) => {
    try {
        const foundAccount = await Account.findOne({
            where: { account_id: req.params.id }
        })
        res.status(200).json(foundAccount)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Account
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const newAccount = await Account.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a account',
            data: newAccount
        })
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// UPDATE A Account
router.put('/:id', async (req, res) => {
    try {
        const updatedAccounts = await Account.update(req.body, {
            where: {
                account_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedAccounts} account(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A Account
router.delete('/:id', async (req, res) => {
    try {
        const deletedAccounts = await Account.destroy({
            where: {
                account_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedAccounts} account(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



module.exports = router;

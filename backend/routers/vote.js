const Router = require('express')
const router = Router()
const Vote = require('../models/vote')

router.post('/answer', async (req, res) => {

    try {
        await Vote.create({
                user: req.body.user,
                answer: req.body.answer,
                text: req.body.text
            }
        )
        res.sendStatus(200)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

module.exports = router
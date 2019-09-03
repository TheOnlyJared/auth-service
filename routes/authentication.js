const express = require('express')
const router = express.Router()

// some middleware
router.use((req, res, next) => {
    console.log('Authentication request at: ', new Date(Date.now()))
    console.log('Path: ', req.path)
    console.log('Base URL: ', req.baseUrl)

    // TODO: some logic based on path

    next()
})

// routes used
router.post('/forgot_password', (req, res) => {
    const { body } = req

    // TODO: some logic, send url to reset to user's email
    res.status(200).send('Still need to wire up logic')
})

router.post('/sign_in', (req, res) => {
    const { body } = req
    // const { email, password } = body

    // TODO: some DB logic to match name and password
    res.status(200).send('Still need to wire up logic')
})

router.post('/sign_up', (req, res) => {
    const { body } = req
    // const { email, password } = body

    // TODO: some insert into DB logic
    res.status(200).send('Still need to wire up logic')
})

module.exports = router
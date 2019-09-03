const express = require('express')
const router = express.Router()

// some middleware
router.use((req, res, next) => {
    console.log('Authentication request at: ', Date.now())
    console.log('Some details: ', req)
    next()
})

// routes used
router.post('forgot_password', (req, res) => {
    const { body } = req

    // TODO: some logic, send url to reset to user's email
})

router.post('sign_in', (req, res) => {
    const { body } = req
    const { fullName, password } = body

    // TODO: some DB logic to match name and password
})

router.post('/sign_up', (req, res) => {
    const { body } = req
    const { fullName, password } = body

    // TODO: some insert into DB logic
})

module.exports = router
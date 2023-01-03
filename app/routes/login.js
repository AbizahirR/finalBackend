const { Router } = require('express')

const {
    verifyLogin
} = require('../controllers/login')

const router = Router()

router.post('/', verifyLogin)

module.exports = router
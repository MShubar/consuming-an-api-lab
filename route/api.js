const express = require('express')
const router = express.Router()
const apiController = require('../controllers/api')

router.get('/', apiController.api)
router.get('/weather', apiController.showing)

module.exports = router

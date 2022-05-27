
const express = require('express');
const Capybara = require('../models/capybara');
const cabybaraService = require('../services/cabybaraService');
const router = express.Router()


router.get('', cabybaraService.cabypbarasList)

router.get('/:name', cabybaraService.cabybaraFindByName)

router.post('/', cabybaraService.cabybaraRegister)

router.put('/', async (req, res, next) => {
    res.status(200)
})

router.delete('/', cabybaraService.cabybaraDelete)

module.exports = app => app.use('/capybaras', router)
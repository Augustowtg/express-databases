
const express = require('express');
const capybaraService = require('../service/capybaraService');
const router = express.Router()

router.get('/', capybaraService.capyFind);

router.post('/', (req, res) => {
    res.status(200).json({ message: '' });
});

router.put('/', (req, res) => {
    res.status(200).json({ message: '' });
});

router.delete('/', (req, res) => {
    res.status(200).json({ message: '' });
});


module.exports = app => app.use('/capybara', router)
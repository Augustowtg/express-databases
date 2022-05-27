const express = require('express');
const router = express.Router();
const personaService = require('../service/personaService');

router.post('/', personaService.personaCreate)
router.post('/match', personaService.personMovieMatch)

module.exports = app => app.use('/persona', router)
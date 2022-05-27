const express = require('express');
const router = express.Router();
const movieService = require('../service/movieService');

router.post('/', movieService.movieCreate)

module.exports = app => app.use('/movie', router)
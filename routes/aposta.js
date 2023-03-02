const path = require('path');

const express = require('express');

const apostaController = require('../controllers/aposta');

const router = express.Router();

router.get('/', apostaController.getIndex);

module.exports = router;

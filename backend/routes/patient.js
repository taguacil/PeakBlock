const express = require('express');

const router = express.Router();

const patientController = require('../controllers/patientController');

router.post('/', patientController.register);

module.exports = router;

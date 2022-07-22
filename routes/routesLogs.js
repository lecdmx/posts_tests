const express = require('express');
const router = express.Router();
const logsController = require('../controllers/logsController');

router.get('/logs', logsController.index);


module.exports = router;
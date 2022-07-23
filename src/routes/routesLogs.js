const express = require('express');
const router = express.Router();
const logsController = require('../controllers/logsController');
const { verifyToken } = require('../middleware/authentication');

router.get('/logs', verifyToken, logsController.index);


module.exports = router;
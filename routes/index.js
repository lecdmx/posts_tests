const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/users', usersController.index);
router.post('/users', usersController.store);


module.exports = router;
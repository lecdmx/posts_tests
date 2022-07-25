const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const logsController = require('../controllers/logsController');
const { verifyToken } = require('../middleware/authentication');
const { verifyIsAdmin } = require('../middleware/authentication');

router.post('/logs',
    [
        check('id_user_loged').not().isEmpty().withMessage('id_user_loged is a required parameter'),
        check('id_user_loged').isNumeric().withMessage('id_user_loged must be a number')
    ], 
    verifyToken, verifyIsAdmin, logsController.getLogs);


module.exports = router;
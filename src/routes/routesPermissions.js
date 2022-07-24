const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const permissionsController = require('../controllers/permissionsController');
const { verifyToken } = require('../middleware/authentication');
const { verifyIsAdmin } = require('../middleware/authentication');

router.post('/permissions',
    [
        check('id_user').not().isEmpty().withMessage('id_user is a required parameter'),
        check('id_user').isNumeric().withMessage('id_user must be a number'),
        check('id_permission').not().isEmpty().withMessage('id_permission is a required parameter'),
        check('id_permission').isNumeric().withMessage('id_permission must be a number'),
        check('id_user_loged').not().isEmpty().withMessage('id_user_loged is a required parameter'),
        check('id_user_loged').isNumeric().withMessage('id_user_loged must be a number')
    ],
    verifyToken, verifyIsAdmin, permissionsController.store);

router.delete('/permissions',
    [
        check('id_user').not().isEmpty().withMessage('id_user is a required parameter'),
        check('id_user').isNumeric().withMessage('id_user must be a number'),
        check('id_permission').not().isEmpty().withMessage('id_permission is a required parameter'),
        check('id_permission').isNumeric().withMessage('id_permission must be a number'),
        check('id_user_loged').not().isEmpty().withMessage('id_user_loged is a required parameter'),
        check('id_user_loged').isNumeric().withMessage('id_user_loged must be a number')
    ],
    verifyToken, verifyIsAdmin, permissionsController.deletePermission);


module.exports = router;
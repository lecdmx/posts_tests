const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const usersController = require('../controllers/usersController');
const { verifyToken } = require('../middleware/authentication');
const { verifyIsAdmin } = require('../middleware/authentication');

router.post('/users',
    [
        check('id_user_loged').not().isEmpty().withMessage('id_user_loged is a required parameter'),
        check('id_user_loged').isNumeric().withMessage('id_user_loged must be a number')
    ],
    verifyToken, verifyIsAdmin, usersController.index);

router.post('/saveUser',
    [
        check('name').not().isEmpty().withMessage('name is a required parameter'),
        check('email').not().isEmpty().withMessage('email is a required parameter'),
        check('email').isEmail().withMessage('email must be a valid email address'),
        check('id_user_loged').not().isEmpty().withMessage('id_user_loged is a required parameter'),
        check('id_user_loged').isNumeric().withMessage('id_user_loged must be a number')
    ],
    verifyToken, verifyIsAdmin, usersController.store);

router.post('/getUser',
    [
        check('id_user_loged').not().isEmpty().withMessage('id_user_loged is a required parameter'),
        check('id_user_loged').isNumeric().withMessage('id_user_loged must be a number'),
        check('id_user').not().isEmpty().withMessage('id_user is a required parameter'),
        check('id_user').isNumeric().withMessage('id_user must be a number')
    ],
    verifyToken, verifyIsAdmin, usersController.show);

router.put('/users',
    [
        check('name').not().isEmpty().withMessage('name is a required parameter'),
        check('email').not().isEmpty().withMessage('email is a required parameter'),
        check('email').isEmail().withMessage('email must be a valid email address'),
        check('id_user_loged').not().isEmpty().withMessage('id_user_loged is a required parameter'),
        check('id_user_loged').isNumeric().withMessage('id_user_loged must be a number')
    ],
    verifyToken, verifyIsAdmin, usersController.update);

router.delete('/users/:id',
    verifyToken, verifyIsAdmin, usersController.delete);

router.post('/login',
    [
        check('email').not().isEmpty().withMessage('email is a required parameter'),
        check('email').isEmail().withMessage('email must be a valid email address'),
        check('password').not().isEmpty().withMessage('name is a required parameter')
    ],
    usersController.login);


module.exports = router;
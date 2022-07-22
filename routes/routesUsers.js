const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const usersController = require('../controllers/usersController');

router.get('/users', usersController.index);

router.post('/users',
    [
        check('name').not().isEmpty().withMessage('name is a required parameter'),
        check('email').not().isEmpty().withMessage('email is a required parameter'),
        check('password').not().isEmpty().withMessage('password is a required parameter'),
        check('id_rol').not().isEmpty().withMessage('id_rol is a required parameter'),
    ],
    usersController.store);

router.get('/users/:id', usersController.show);

router.put('/users',
    [
        check('name').not().isEmpty().withMessage('name is a required parameter'),
        check('email').not().isEmpty().withMessage('email is a required parameter'),
        check('id_rol').not().isEmpty().withMessage('id_rol is a required parameter'),
    ],
    usersController.update);

router.delete('/users/:id', usersController.delete);


module.exports = router;
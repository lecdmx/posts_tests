const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const permissionsController = require('../controllers/permissionsController');

router.post('/permissions', [
    check('id_rol').not().isEmpty().withMessage('id_rol is a required parameter'),
    check('id_rol').isNumeric().withMessage('id_rol must be a number'),
    check('id_permission').not().isEmpty().withMessage('id_permission is a required parameter'),
    check('id_permission').isNumeric().withMessage('id_permission must be a number'),
], permissionsController.store);

router.post('/deletebyid', [
    check('id_rol').not().isEmpty().withMessage('id_rol is a required parameter'),
    check('id_rol').isNumeric().withMessage('id_rol must be a number'),
    check('id_permission').not().isEmpty().withMessage('id_permission is a required parameter'),
    check('id_permission').isNumeric().withMessage('id_permission must be a number'),
], permissionsController.deletePermission);


module.exports = router;
const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const postsController = require('../controllers/postsController');
const { verifyToken, verifyHavePermissionCreateDeleteGETPOSTS, verifyHavePermissionUpdatePosts } = require('../middleware/authentication');

router.get('/posts', postsController.index);

router.post('/postsbydate',
    [
        check('start_date').not().isEmpty().withMessage('start_date is a required parameter'),
        check('start_date').matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/).withMessage('start_date must be a date (yyyy-mm-dd)'),
        check('end_date').not().isEmpty().withMessage('end_date is a required parameter'),
        check('end_date').matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/).withMessage('end_date must be a date (yyyy-mm-dd)')
    ],
    postsController.getPostsByDate);

router.get('/posts/:id', postsController.show);

router.post('/posts',
    [
        check('post').not().isEmpty().withMessage('post is a required parameter'),
        check('id_user_loged').not().isEmpty().withMessage('id_user_loged is a required parameter'),
        check('id_user_loged').isNumeric().withMessage('id_user_loged must be a number')
    ],
    verifyToken, verifyHavePermissionCreateDeleteGETPOSTS, postsController.store);

router.delete('/posts',
    [
        check('id_user_loged').not().isEmpty().withMessage('id_user_loged is a required parameter'),
        check('id_user_loged').isNumeric().withMessage('id_user_loged must be a number'),
        check('id_post').not().isEmpty().withMessage('id_post is a required parameter'),
        check('id_post').isNumeric().withMessage('id_post must be a number')
    ],
    verifyToken, verifyHavePermissionCreateDeleteGETPOSTS, postsController.delete);


router.put('/posts',
    [
        check('post').not().isEmpty().withMessage('post is a required parameter'),
        check('id_user_loged').not().isEmpty().withMessage('id_user_loged is a required parameter'),
        check('id_user_loged').isNumeric().withMessage('id_user_loged must be a number'),
        check('id_post').not().isEmpty().withMessage('id_post is a required parameter'),
        check('id_post').isNumeric().withMessage('id_post must be a number')
    ],
    verifyToken, verifyHavePermissionUpdatePosts, postsController.update);



module.exports = router;
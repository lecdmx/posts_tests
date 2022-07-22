const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const commentsController = require('../controllers/commentsController');

router.get('/comments', commentsController.index);


router.post('/commentsbypost',
    [
        check('id_post').not().isEmpty().withMessage('id_post is a required parameter'),
        check('id_post').isNumeric().withMessage('id_post must be a number')
    ], commentsController.getCommentsByPost);


router.post('/comments',
    [
        check('post').not().isEmpty().withMessage('post is a required parameter'),
        check('id_user').not().isEmpty().withMessage('id_user is a required parameter'),
        check('id_user').isNumeric().withMessage('id_user must be a number')
    ], commentsController.store);

router.get('/comments/:id', commentsController.show);


router.post('/deletecommentbyid',
    [
        check('id_comment').not().isEmpty().withMessage('id_comment is a required parameter'),
        check('id_comment').isNumeric().withMessage('id_comment must be a number')
    ], commentsController.delete);


router.put('/comments',
    [
        check('post').not().isEmpty().withMessage('post is a required parameter'),
        check('id_user').not().isEmpty().withMessage('id_user is a required parameter'),
        check('id_user').isNumeric().withMessage('id_user must be a number'),
        check('id_post').not().isEmpty().withMessage('id_post is a required parameter'),
        check('id_post').isNumeric().withMessage('id_post must be a number')
    ], commentsController.update);



module.exports = router;
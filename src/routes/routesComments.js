const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const commentsController = require('../controllers/commentsController');
const { verifyToken } = require('../middleware/authentication');
const { verifyHavePermissionDeleteComments } = require('../middleware/authentication');

router.get('/comments', verifyToken, commentsController.index);

router.post('/commentsbypost',
    [
        check('id_post').not().isEmpty().withMessage('id_post is a required parameter'),
        check('id_post').isNumeric().withMessage('id_post must be a number')
    ], verifyToken, commentsController.getCommentsByPost);


router.post('/comments',
    [
        check('comment').not().isEmpty().withMessage('comment is a required parameter'),
        check('id_post').not().isEmpty().withMessage('id_post is a required parameter'),
        check('id_post').isNumeric().withMessage('id_post must be a number')
    ], commentsController.store);

router.get('/comments/:id', commentsController.show);

router.delete('/comments',
    [
        check('id_comment').not().isEmpty().withMessage('id_comment is a required parameter'),
        check('id_comment').isNumeric().withMessage('id_comment must be a number'),
        check('id_user_loged').not().isEmpty().withMessage('id_user_loged is a required parameter'),
        check('id_user_loged').isNumeric().withMessage('id_user_loged must be a number')
    ], verifyToken, verifyHavePermissionDeleteComments, commentsController.delete);


router.put('/comments',
    [
        check('comment').not().isEmpty().withMessage('comment is a required parameter'),
        check('id_comment').not().isEmpty().withMessage('id_comment is a required parameter'),
        check('id_comment').isNumeric().withMessage('id_comment must be a number')
    ], verifyToken, commentsController.update);



module.exports = router;
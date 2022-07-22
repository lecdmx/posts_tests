const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const commentsController = require('../controllers/commentsController');

router.get('/comments', commentsController.index);


router.post('/commentsbypost',
    [
        check('id_post').not().isEmpty().withMessage('id_post is a required parameter')
    ], commentsController.getCommentsByPost);


router.post('/comments',
    [
        check('post').not().isEmpty().withMessage('post is a required parameter'),
        check('id_user').not().isEmpty().withMessage('id_rol is a required parameter')
    ], commentsController.store);

router.get('/comments/:id', commentsController.show);

router.delete('/comments', commentsController.delete);

    
router.put('/comments',
[
    check('post').not().isEmpty().withMessage('post is a required parameter'),
    check('id_user').not().isEmpty().withMessage('id_user is a required parameter'),
    check('id_post').not().isEmpty().withMessage('id_post is a required parameter'),
], commentsController.update);



module.exports = router;
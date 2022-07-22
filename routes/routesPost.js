const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const postsController = require('../controllers/postsController');

router.get('/posts', postsController.index);

router.post('/posts',
    [
        check('post').not().isEmpty().withMessage('post is a required parameter'),
        check('id_user').not().isEmpty().withMessage('id_rol is a required parameter'),
    ], postsController.store);

router.get('/posts/:id', postsController.show);

router.post('/deletepost',
    [
        check('id_user').not().isEmpty().withMessage('id_user is a required parameter'),
        check('id_post').not().isEmpty().withMessage('id_post is a required parameter'),
    ], postsController.delete);

    
router.post('/updatepost',
[
    check('post').not().isEmpty().withMessage('post is a required parameter'),
    check('id_user').not().isEmpty().withMessage('id_user is a required parameter'),
    check('id_post').not().isEmpty().withMessage('id_post is a required parameter'),
], postsController.update);



module.exports = router;
const jwt = require('jsonwebtoken');
const { db } = require('../config/db');
const constants = require('../config/util');
const { validationResult } = require("express-validator");


exports.verifyToken = async (req, res, next) => {

    const authorization = req.get('authorization');

    let token = '';

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.split(' ')[1];
    } 

    let decodedToken = {};

    try {
        decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
        console.log(Error);
    }

    if (!token || !decodedToken.id) {

        res.json({
            "message": {},
            "error_message": "Token missing or invalid",
            "status": false
        });

    } else {

        next();

    }

};


exports.verifyIsAdmin = async (req, res, next) => {

    try {


        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({
                "message": {},
                "error_message": errors.array(),
                "status": false
            })

        const { body } = req;

        let response = await db.query(
            ` SELECT r.id_rol 	
                FROM challenge.rol r
                JOIN challenge.user u ON (r.id_rol = u.id_rol)
                WHERE u.id_user = :id_user 
                AND r.id_rol = :id_rol `,
            {
                type: db.QueryTypes.SELECT,
                replacements: {
                    id_user: body.id_user_loged,
                    id_rol: constants.USER_TYPE.ADMIN
                }
            })

        if (!response || response.length === 0) {

            res.json({
                "message": {},
                "error_message": "Invalid permissions",
                "status": false
            });

        } else {

            next();

        }

    }
    catch (error) {

        res.json({
            "message": {},
            "error_message": error,
            "status": false
        });

    }

};


exports.verifyHavePermissionDeleteComments = async (req, res, next) => {

    try {


        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({
                "message": {},
                "error_message": errors.array(),
                "status": false
            })

        const { body } = req;

        let response = await db.query(
            ` SELECT rel.id_permission
                FROM challenge.user r
                JOIN challenge.rel_user_permission rel 
                    ON (rel.id_user = r.id_user)
                JOIN challenge.permission p 
                    ON (rel.id_permission = p.id_permission)
                WHERE rel.id_user = :id_user
                    AND p.id_permission = :id_permission `,
            {
                type: db.QueryTypes.SELECT,
                replacements: {
                    id_user: body.id_user_loged,
                    id_permission: constants.PERMISSIONS.DELETE_COMMENT
                }
            })

        if (!response || response.length === 0) {

            res.json({
                "message": {},
                "error_message": "Invalid permissions",
                "status": false
            });

        } else {

            next();

        }

    }
    catch (error) {

        res.json({
            "message": {},
            "error_message": error,
            "status": false
        });

    }

};

exports.verifyHavePermissionUpdatePosts = async (req, res, next) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({
                "message": {},
                "error_message": errors.array(),
                "status": false
            })

        const { body } = req;

        let response = await db.query(
            ` SELECT rel.id_permission
                FROM challenge.user r
                JOIN challenge.rel_user_permission rel 
                    ON (rel.id_user = r.id_user)
                JOIN challenge.permission p 
                    ON (rel.id_permission = p.id_permission)
                WHERE rel.id_user = :id_user
                    AND p.id_permission = :id_permission `,
            {
                type: db.QueryTypes.SELECT,
                replacements: {
                    id_user: body.id_user_loged,
                    id_permission: constants.PERMISSIONS.UPDATE_POST
                }
            })

        if (!response || response.length === 0) {

            res.json({
                "message": {},
                "error_message": "Invalid permissions",
                "status": false
            });

        } else {

            next();

        }

    }
    catch (error) {

        res.json({
            "message": {},
            "error_message": error,
            "status": false
        });

    }

};


exports.verifyHavePermissionCreateDeleteGETPOSTS = async (req, res, next) => {

    try {


        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({
                "message": {},
                "error_message": errors.array(),
                "status": false
            })

        const { body } = req;

        let response = await db.query(
            ` SELECT rel.id_permission
                FROM challenge.user r
                JOIN challenge.rel_user_permission rel 
                    ON (rel.id_user = r.id_user)
                JOIN challenge.permission p 
                    ON (rel.id_permission = p.id_permission)
                WHERE rel.id_user = :id_user
                    AND p.id_permission = :id_permission `,
            {
                type: db.QueryTypes.SELECT,
                replacements: {
                    id_user: body.id_user_loged,
                    id_permission: constants.PERMISSIONS.GET_CREATE_DELETE_POST
                }
            })

        if (!response || response.length === 0) {

            res.json({
                "message": {},
                "error_message": "Invalid permissions",
                "status": false
            });

        } else {

            next();

        }

    }
    catch (error) {

        res.json({
            "message": {},
            "error_message": error,
            "status": false
        });

    }

};
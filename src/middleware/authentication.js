const jwt = require('jsonwebtoken');
const { db } = require('../../config/db');
const { validationResult } = require("express-validator");

const USER_TYPE = {
    ADMIN: 1,
    STANDARD: 2
}


const PERMISSION_POSTS = {
    GET_CREATE_DELETE: 1,
    UPDATE: 2,
    DELETE: 3
}

exports.verifyToken = async (req, res, next) => {

    const { body } = req;

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
    // console.log(`body JSON: ${JSON.stringify(body)}`);
    // const isSameUser = Number(decodedToken.id) === Number(body.id_user);
    // console.log(`!decodedToken.id === body.id_user : ${isSameUser}`);
    if (!token || !decodedToken.id) {

        res.json({
            "error_message": "Token missing or invalid",
        });

    } else {

        console.log(`JSON: ${JSON.stringify(decodedToken)}`);

        next();

    }

};


exports.verifyIsAdmin = async (req, res, next) => {

    try {


        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });

        const { body } = req;
        console.log(`body ${JSON.stringify(body)}`);

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
                    id_rol: USER_TYPE.ADMIN
                }
            })

        console.log(`${JSON.stringify(response)}`);

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
        console.log(error);

        res.json({
            "message": {},
            "error_message": (error.message) ? error.message : "General error",
            "status": false
        });

    }

};


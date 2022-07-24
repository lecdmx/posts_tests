const { db } = require('../../config/db');
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.index = async (req, res) => {

    try {
      
        const response = await db.query(
            `SELECT id_user, name, email, id_rol            
                FROM challenge.user 
                ORDER BY id_rol `,
            {
                type: db.QueryTypes.SELECT
            })

        res.json({
            "message": {},
            "results": response,
            "error_message": {},
            "status": true
        });

    }
    catch (error) {
        console.log(error);

        res.json({
            "message": {},
            "results": [],
            "error_message": (error.message) ? error.message : "General error",
            "status": false
        });

    }

};


exports.store = async (req, res) => {

    try {
        
        console.log('users.store');

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });


        const { body } = req;

        let generatedId = 0;

        const responseEmailExists = await db.query(
            `SELECT id_user, name, email
                FROM challenge.user 
                WHERE email = :email  `,
            {
                type: db.QueryTypes.SELECT,
                replacements: {
                    email: body.email
                }
            })

        const user = responseEmailExists[0];

        console.log(`user ${user}`);

        if (user) {

            res.json({
                "message": {},
                "error_message": "Email already exists",
                "status": false
            });

        } else {

            let response = await db.query(
                `INSERT INTO challenge.user (name, email, password, id_rol)
                        VALUES (:name, :email, :password, :id_rol) 
                        RETURNING id_user `,
                {
                    type: db.QueryTypes.INSERT,
                    replacements: {
                        name: body.name,
                        email: body.email,
                        password: bcrypt.hashSync(body.password),
                        id_rol: body.id_rol
                    }
                });

            generatedId = response[0][0].id_user;

            res.json({
                "message": { "generated_id": generatedId },
                "error_message": {},
                "status": true
            });

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


exports.show = async (req, res) => {
    try {
        const { body } = req;

        const response = await db.query(
            ` SELECT id_user, name, email, password, id_rol
                FROM challenge.user 
                WHERE id_user = :id`,
            {
                type: db.QueryTypes.SELECT,
                replacements: {
                    id: body.id_user
                }
            })

        res.json({
            "message": {},
            "results": response,
            "error_message": {},
            "status": true
        });

    }
    catch (error) {
        console.log(error);

        res.json({
            "message": {},
            "results": [],
            "error_message": (error.message) ? error.message : "General error",
            "status": false
        });

    }

};


exports.update = async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });

        const { body } = req;

        await db.query(
            `UPDATE challenge.user SET name = :name, email= :email, id_rol = :id_rol
                WHERE id_user = :id_user`,
            {
                type: db.QueryTypes.UPDATE,
                replacements: {
                    id_user: body.id_user,
                    id_rol: body.id_rol,
                    name: body.name,
                    email: body.email
                }
            }
        )


        res.json({
            "message": { "updated_id": body.id_user },
            "error_message": {},
            "status": true
        });


    } catch (error) {
        console.log(error);


        res.json({
            "message": {},
            "error_message": (error.message) ? error.message : "General error",
            "status": false
        });

    }
}


exports.delete = async (req, res) => {
    try {
        const { params } = req

        await db.transaction(async (t) => {

            //  delete comments
            await db.query(
                ` DELETE FROM challenge.comment                    
                        WHERE id_post IN
                        ( SELECT id_post FROM challenge.post WHERE id_user = :id) `,
                {
                    type: db.QueryTypes.DELETE,
                    replacements: {
                        id: params.id
                    }
                }, { transaction: t });

            //  delete posts
            await db.query(` DELETE FROM challenge.post
                                WHERE id_user = :id
                `,
                {
                    type: db.QueryTypes.DELETE,
                    replacements: {
                        id: params.id
                    }
                }, { transaction: t });

            //  delete user
            await db.query(` DELETE FROM challenge.user
                                WHERE id_user = :id
                    `,
                {
                    type: db.QueryTypes.DELETE,
                    replacements: {
                        id: params.id
                    }
                }, { transaction: t });

        });

        res.json({
            "message": { "deleted_id": params.id },
            "error_message": {},
            "status": true
        });


    } catch (error) {
        console.log(error);

        res.json({
            "message": {},
            "error_message": (error.message) ? error.message : "General error",
            "status": false
        });

    }
}



exports.login = async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });

        const { body } = req;

        const response = await db.query(`SELECT id_user, name, email, password, id_rol
                                            FROM challenge.user 
                                            WHERE email = :email  `, {
            type: db.QueryTypes.SELECT,
            replacements: {
                email: body.email
            }
        })

        const user = response[0];

        if (user) {

            const isValid = bcrypt.compareSync(body.password, user.password);

            if (isValid) {

                const token = jwt.sign({
                    name: user.name,
                    id: user.id_user,
                    id_rol: user.id_rol
                }, process.env.TOKEN_SECRET, {
                    expiresIn: '100d'
                })


                res.header('auth-token', token).json({
                    "error_message": {},
                    "results": { token },
                    "status": true
                });

            } else {

                res.json({
                    "message": "Login failed",
                    "error_message": "User not found",
                    "status": false,
                    login: false
                });


            }

        } else {

            res.json({
                "message": "Login failed",
                "error_message": "User not found",
                "status": false,
                login: false
            });

        }


    } catch (error) {

        console.log(error);

        res.json({
            "message": {},
            "error_message": (error.message) ? error.message : "General error",
            "status": false
        });
    }


}
const { db } = require('../config/db');
const { validationResult } = require("express-validator");

exports.index = async (req, res) => {

    try {
        const response = await db.query(`SELECT id_user, name, email, password, id_rol
                                            FROM challenge.user 
                                        `,
            {
                type: db.QueryTypes.SELECT
            })

        res.json(response);

    }
    catch (error) {
        console.log(error);
        res.json({ "Error": error });
    }

};


exports.store = async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });


        const { body } = req;

        const response = await db.query(`INSERT INTO challenge.user (name, email, password, id_rol)
                                            VALUES (:name, :email, :password, :id_rol) 
                                            RETURNING id_user
                                        `,
            {
                type: db.QueryTypes.INSERT,
                replacements: {
                    name: body.name,
                    email: body.email,
                    password: body.password,
                    id_rol: body.id_rol
                }
            })

        res.json(response);

    }
    catch (error) {
        console.log(error);
        res.json({ "Error": error });
    }

};


exports.show = async (req, res) => {
    try {
        const { params } = req;

        const response = await db.query(`SELECT id_user, name, email, password, id_rol
                                        FROM challenge.user WHERE id_user = :id`, {
            type: db.QueryTypes.SELECT,
            replacements: {
                id: params.id
            }
        })

        res.json(response)
    } catch (error) {
        console.log(error);
        res.json({ "Error": error });
    }
}


exports.update = async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });

        const { body } = req;

        const response = await db.query(
            `UPDATE challenge.user SET name = :name, email= :email WHERE id_user = :id_user`,
            {
                type: db.QueryTypes.UPDATE,
                replacements: {
                    id_user: body.id_user,
                    name: body.name,
                    email: body.email
                }
            }
        )

        res.json(response)
    } catch (error) {
        console.log(error);
        res.json({ "Error": error });
    }
}


exports.delete = async (req, res) => {
    try {
        const { params } = req

        const response = await db.query(`DELETE FROM challenge.user WHERE id_user = :id_user`, {
            type: db.QueryTypes.DELETE,
            replacements: {
                id_user: params.id_user
            }
        })

        res.json(response)
    } catch (error) {
        console.log(error);
        res.json({ "Error": error });
    }
}

const { db } = require('../config/db');
const { validationResult } = require("express-validator");


exports.store = async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({
                "message": {},
                "error_message": errors.array(),
                "status": false
            })



        const { body } = req;

        await db.transaction(async (t) => {

            let response = await db.query(
                `SELECT id_user FROM challenge.rel_user_permission
                    WHERE id_user = :id_user 
                    AND id_permission = :id_permission
                `,
                {
                    type: db.QueryTypes.SELECT,
                    replacements: {
                        id_user: body.id_user,
                        id_permission: body.id_permission,
                    }
                }, { transaction: t });


            if (response.length === 0) {

                await db.query(
                    `INSERT INTO challenge.rel_user_permission (id_user, id_permission)
                        VALUES (:id_user, :id_permission)                                        
                    `,
                    {
                        type: db.QueryTypes.INSERT,
                        replacements: {
                            id_user: body.id_user,
                            id_permission: body.id_permission,
                        }
                    }, { transaction: t });
            }

        });


        res.json({
            "message": { "asignated_id": body.id_permission },
            "error_message": {},
            "status": true
        });

    }
    catch (error) {

        res.json({
            "message": {},
            "error_message": error.message,
            "status": false
        });

    }

};

exports.deletePermission = async (req, res) => {
    try {
        const { body } = req;

        await db.query(
            ` DELETE FROM challenge.rel_user_permission                
                    WHERE id_user = :id_user                 
                    AND id_permission = :id_permission
                `,
            {
                type: db.QueryTypes.INSERT,
                replacements: {
                    id_user: body.id_user,
                    id_permission: body.id_permission,
                }
            })


        res.json({
            "message": { "deleted_id": body.id_permission },
            "error_message": {},
            "status": true
        });


    } catch (error) {

        res.json({
            "message": {},
            "error_message": error.message,
            "status": false
        });

    }
}

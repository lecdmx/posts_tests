const { db } = require('../../config/db');
const { validationResult } = require("express-validator");


exports.store = async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });


        const { body } = req;

        await db.query(`INSERT INTO challenge.rel_rol_permission (id_rol, id_permission) 
                                            VALUES (:id_rol, :id_permission)
                                        `,
            {
                type: db.QueryTypes.INSERT,
                replacements: {
                    id_rol: body.id_rol,
                    id_permission: body.id_permission,
                }
            })

        res.json({
            "message": { "asignated_id": body.id_permission },
            "error_message": {},
            "status": true
        });

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

exports.deletePermission = async (req, res) => {
    try {
        const { body } = req;

        await db.query(` DELETE FROM challenge.rel_rol_permission
                                            WHERE id_rol = :id_rol AND id_permission :id_permission
                                        `,
            {
                type: db.QueryTypes.INSERT,
                replacements: {
                    id_rol: body.id_rol,
                    id_permission: body.id_permission,
                }
            })


        res.json({
            "message": { "deleted_id": body.id_permission },
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

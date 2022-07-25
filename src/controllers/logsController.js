const { db } = require('../config/db');
const { validationResult } = require("express-validator");

exports.index = async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({
                "message": {},
                "error_message": errors.array(),
                "status": false
            })



        const response = await db.query(`SELECT id_log, id_user, id_post, content
                                            FROM challenge.log 
                                        `,
            {
                type: db.QueryTypes.SELECT
            })

        res.json(response);

    }
    catch (error) {

        res.json({
            "message": {},
            "error_message": error.message,
            "status": false
        });
        
    }

};

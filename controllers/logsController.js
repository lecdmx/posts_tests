const { db } = require('../config/db');
const { validationResult } = require("express-validator");

exports.index = async (req, res) => {

    try {
        const response = await db.query(`SELECT id_log, id_user, id_post, content
                                            FROM challenge.log 
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

const { db } = require('../config/db');

exports.index = async (req, res) => {

    try {

        const response = await db.query(
            `SELECT id_log, id_user, id_post, content                                        
                FROM challenge.log            
            `,
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
        
        res.json({
            "message": {},
            "error_message": error.message,
            "status": false
        });

    }

};

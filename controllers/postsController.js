const { db } = require('../config/db');
const { validationResult } = require("express-validator");

exports.index = async (req, res) => {

    try {
        const response = await db.query(`SELECT id_post,  
                                            creation_date, to_char(creation_date, 'DD/MM/YYYY') as creation_date_formated
                                            FROM challenge.post 
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

        let generatedPostId = 0;
        await db.transaction(async (t) => {

            const response = await db.query(`INSERT INTO challenge.post (id_user, post, creation_date)
                                            VALUES (:id_user, :post, current_timestamp)  
                                            RETURNING id_post
                                        `,
                {
                    type: db.QueryTypes.INSERT,
                    replacements: {
                        id_user: body.id_user,
                        post: body.post
                    }
                }, { transaction: t });

            console.log(JSON.stringify(response));

            generatedPostId = response[0][0].id_post;
            console.log(`generatedPostId = ${JSON.stringify(response)}`);

            await db.query(`INSERT INTO challenge.log (id_user, id_post, content)
                                            VALUES (:id_user, :id_post, :content)
                                        `,
                {
                    type: db.QueryTypes.INSERT,
                    replacements: {
                        id_user: body.id_user,
                        id_post: generatedPostId,
                        content: `User ${body.id_user} created Post ${generatedPostId}`
                    }
                }, { transaction: t });


        });

        res.json({
            "msgStatus": 'success',
            "message": { "generated_id": generatedPostId },
            "error_message": {},
            "status": true
        });


    }
    catch (error) {
        console.log(error);

        res.json({
            "msgStatus": 'error',
            "message": {},
            "error_message": (error.message) ? error.message : "General error",
            "status": false
        });

    }

};


exports.show = async (req, res) => {
    try {
        const { params } = req;

        const response = await db.query(`SELECT id_post,  
                                        creation_date, to_char(creation_date, 'DD/MM/YYYY') as creation_date_formated
                                        FROM challenge.post WHERE id_post = :id`, {
            type: db.QueryTypes.SELECT,
            replacements: {
                id: params.id
            }
        })

        res.json(response);

    } catch (error) {
        console.log(error);
        res.json({ "Error": error });
    }
}



exports.delete = async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });

        const { body } = req;

        let generatedPostId = 0;
        await db.transaction(async (t) => {

            await db.query(`DELETE FROM challenge.post WHERE id_post = :id`,
                {
                    type: db.QueryTypes.DELETE,
                    replacements: {
                        id: body.id_post
                    }
                }, { transaction: t });


            await db.query(`INSERT INTO challenge.log (id_user, id_post, content)
                                            VALUES (:id_user, :id_post, :content)
                                        `,
                {
                    type: db.QueryTypes.INSERT,
                    replacements: {
                        id_user: body.id_user,
                        id_post: body.id_post,
                        content: `User ${body.id_user} deleted Post ${generatedPostId}`
                    }
                }, { transaction: t });


        });

        res.json({
            "msgStatus": 'success',
            "message": { "deleted_id": body.id_post },
            "error_message": {},
            "status": true
        });


    }
    catch (error) {
        console.log(error);

        res.json({
            "msgStatus": 'error',
            "message": {},
            "error_message": (error.message) ? error.message : "General error",
            "status": false
        });

    }
}



exports.update = async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });

        const { body } = req;

        let generatedPostId = 0;
        await db.transaction(async (t) => {

            await db.query(`UPDATE challenge.post SET post = :post WHERE id_post = :id`,
                {
                    type: db.QueryTypes.DELETE,
                    replacements: {
                        id: body.id_post,
                        post: body.post,
                    }
                }, { transaction: t });


            await db.query(`INSERT INTO challenge.log (id_user, id_post, content)
                                            VALUES (:id_user, :id_post, :content)
                                        `,
                {
                    type: db.QueryTypes.INSERT,
                    replacements: {
                        id_user: body.id_user,
                        id_post: body.id_post,
                        content: `User ${body.id_user} deleted Post ${generatedPostId}`
                    }
                }, { transaction: t });


        });

        res.json({
            "msgStatus": 'success',
            "message": { "deleted_id": body.id_post },
            "error_message": {},
            "status": true
        });


    }
    catch (error) {
        console.log(error);

        res.json({
            "msgStatus": 'error',
            "message": {},
            "error_message": (error.message) ? error.message : "General error",
            "status": false
        });

    }
}

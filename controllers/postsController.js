const { db } = require('../config/db');
const { validationResult } = require("express-validator");

exports.index = async (req, res) => {

    try {
        const response = await db.query(`SELECT id_post, creation_date, to_char(creation_date, 'DD/MM/YYYY') as creation_date_formated,
                                            DATE_PART('day', current_timestamp-creation_date) as days,
                                            CASE WHEN 
                                                DATE_PART('day', current_timestamp-creation_date) > 7
                                                THEN 'ALERT_MORE_7_DAYS' 
                                                ELSE '' 
                                            END as alert
                                            FROM challenge.post 
                                            ORDER BY creation_date
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
        console.log(error);

        res.json({
            "message": {},
            "results": [],
            "error_message": (error.message) ? error.message : "General error",
            "status": false
        });

    }

};

exports.getPostsByDate = async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });

        const { body } = req;

        console.log(`${JSON.stringify(body)}`);

        const response = await db.query(`SELECT id_post, creation_date, to_char(creation_date, 'DD/MM/YYYY') as creation_date_formated,
                                            DATE_PART('day', current_timestamp-creation_date) as days,
                                            CASE WHEN 
                                                DATE_PART('day', current_timestamp-creation_date) > 7
                                                THEN 'ALERT_MORE_7_DAYS' 
                                                ELSE '' 
                                            END as alert
                                            FROM challenge.post
                                            WHERE creation_date between :start_date AND :end_date
                                            ORDER BY creation_date
                                        `,
            {
                type: db.QueryTypes.SELECT,
                replacements: {
                    start_date: body.start_date,
                    end_date: body.end_date
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
            "message": { "generated_id": generatedPostId },
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

        res.json({
            "message": {},
            "results": response,
            "error_message": {},
            "status": true
        });

    } catch (error) {
        console.log(error);

        res.json({
            "message": {},
            "results": [],
            "error_message": (error.message) ? error.message : "General error",
            "status": false
        });

    }
}



exports.delete = async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });

        const { body } = req;

        await db.transaction(async (t) => {

            await db.query(`DELETE FROM challenge.comment WHERE id_post = :id`, {
                type: db.QueryTypes.DELETE,
                replacements: {
                    id: body.id_post
                }
            }, { transaction: t })


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
                        content: `User ${body.id_user} deleted Post ${body.id_post}`
                    }
                }, { transaction: t });


        });

        res.json({
            "message": { "deleted_id": body.id_post },
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
}



exports.update = async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });

        const { body } = req;

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
                        content: `User ${body.id_user} updated Post ${body.id_post}`
                    }
                }, { transaction: t });


        });

        res.json({
            "message": { "updated_id": body.id_post },
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
}

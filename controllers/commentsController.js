const { db } = require('../config/db');
const { validationResult } = require("express-validator");

exports.index = async (req, res) => {

    try {
        const response = await db.query(`SELECT id_comment, comment, id_comment_parent, 
                                            id_post, creation_date, to_char(creation_date, 'DD/MM/YYYY') as creation_date_formated
                                            FROM challenge.comment 
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

exports.getCommentsByPost = async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({ message: errors.array() });

        const { body } = req;

        const response = await db.query(`SELECT id_comment, comment, id_comment_parent, 
                                            id_post, creation_date, to_char(creation_date, 'DD/MM/YYYY') as creation_date_formated
                                            FROM challenge.comment 
                                            WHERE id_post = :id_post
                                            ORDER BY creation_date
                                        `,
            {
                type: db.QueryTypes.SELECT,
                replacements: {
                    id_post: body.id_post
                }
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

        console.log(`${body.id_comment_parent}`);

        const response = await db.query(`INSERT INTO challenge.comment (comment, id_comment_parent, id_post, creation_date)
                                            VALUES (:comment, :id_comment_parent, :id_post, current_timestamp)
                                        `,
            {
                type: db.QueryTypes.INSERT,
                replacements: {
                    comment: body.comment,
                    id_comment_parent: (!body.id_comment_parent) ? null : body.id_comment_parent,
                    id_post: body.id_post
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

        const response = await db.query(`SELECT id_comment, comment, id_comment_parent, id_post, creation_date, to_char(creation_date, 'DD/MM/YYYY') as creation_date_formated
                                        FROM challenge.comment WHERE id_comment = :id`, {
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
            `UPDATE challenge.comment SET comment = :comment, 
                WHERE id_comment = :id_comment`,
            {
                type: db.QueryTypes.UPDATE,
                replacements: {
                    id_comment: body.id_comment,
                    comment: body.comment,
                    id_comment_parent: body.id_comment_parent
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

        await db.transaction(async (t) => {

            //  delete comments
            await db.query(` DELETE FROM challenge.comment
                                WHERE id_post IN
                                ( SELECT id_post FROM challenge.post WHERE id_user = :id)
                `,
                {
                    type: db.QueryTypes.DELETE,
                    replacements: {
                        id: params.id
                    }
                }, { transaction: t });


            await db.query(`DELETE FROM challenge.comment WHERE id_comment = :id_comment`, {
                type: db.QueryTypes.DELETE,
                replacements: {
                    id_comment: params.id
                }
            })

        });


        res.json({
            "msgStatus": 'success',
            "message": { "deleted_id": params.id },
            "error_message": {},
            "status": true
        });

    } catch (error) {
        console.log(error);

        res.json({
            "msgStatus": 'error',
            "message": {},
            "error_message": (error.message) ? error.message : "General error",
            "status": false
        });
    }
}

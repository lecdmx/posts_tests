const { db } = require('../config/db');
const { validationResult } = require("express-validator");

exports.index = async (req, res) => {

    try {
        const response = await db.query(
            `SELECT id_comment, comment, id_comment_parent, 
                id_post, creation_date, to_char(creation_date, 'DD/MM/YYYY') as creation_date_formated
                FROM challenge.comment 
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
            "results": [],
            "error_message": error.message,
            "status": false
        });

    }

};

exports.getCommentsByPost = async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({
                "message": {},
                "error_message": errors.array(),
                "status": false
            })


        const { body } = req;

        const response = await db.query(
            `SELECT id_comment, comment, id_comment_parent, 
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
            "results": [],
            "error_message": error,
            "status": false
        });

    }

};

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

        console.log(`${body.id_comment_parent}`);

        const response = await db.query(
            `INSERT INTO challenge.comment (comment, id_comment_parent, id_post, creation_date, id_user)            
                VALUES (:comment, :id_comment_parent, :id_post, current_timestamp, :id_user)            
                RETURNING id_comment            
            `,
            {
                type: db.QueryTypes.INSERT,
                replacements: {
                    comment: body.comment,
                    id_post: body.id_post,
                    id_user: (!body.id_user) ? null : body.id_user,
                    id_comment_parent: (!body.id_comment_parent) ? null : body.id_comment_parent
                }
            })

        const generatedId = response[0][0].id_comment;

        res.json({
            "message": { "generated_id": generatedId },
            "error_message": {},
            "status": true
        });

    }
    catch (error) {

        res.json({
            "message": {},
            "error_message": error,
            "status": false
        });

    }

};


exports.show = async (req, res) => {
    try {
        const { params } = req;

        const response = await db.query(
            `SELECT id_comment, comment, id_comment_parent, id_post, creation_date, 
                to_char(creation_date, 'DD/MM/YYYY') as creation_date_formated
                FROM challenge.comment WHERE id_comment = :id
            `, {
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

    }
    catch (error) {

        res.json({
            "message": {},
            "results": [],
            "error_message": error,
            "status": false
        });

    }

};


exports.update = async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw ({
                "message": {},
                "error_message": errors.array(),
                "status": false
            })


        const { body } = req;

        await db.query(
            `UPDATE challenge.comment SET comment = :comment
                WHERE id_comment = :id_comment`,
            {
                type: db.QueryTypes.UPDATE,
                replacements: {
                    id_comment: body.id_comment,
                    comment: body.comment
                }
            }
        )

        res.json({
            "message": { "updated_id": body.id_comment },
            "error_message": {},
            "status": true
        });

    } catch (error) {

        res.json({
            "message": {},
            "error_message": error,
            "status": false
        });

    }
}


exports.delete = async (req, res) => {

    try {
     
        const { body } = req

        await db.transaction(async (t) => {

            //  delete comments 
            await db.query(` DELETE FROM challenge.comment
                                WHERE id_comment_parent = :id 
                `,
                {
                    type: db.QueryTypes.DELETE,
                    replacements: {
                        id: body.id_comment
                    }
                }, { transaction: t });


            await db.query(`DELETE FROM challenge.comment WHERE id_comment = :id`, {
                type: db.QueryTypes.DELETE,
                replacements: {
                    id: body.id_comment
                }
            }, { transaction: t })

        });


        res.json({
            "message": { "deleted_id": body.id_comment },
            "error_message": {},
            "status": true
        });

    } catch (error) {

        res.json({
            "message": {},
            "error_message": error,
            "status": false
        });
    }
}

const { db } = require('../config/db');

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

    const { body } = req;

    try {

        const response = await db.query(`INSERT INTO challenge.user (name, email, password, id_rol)
                                            VALUES (:name, :email, :password, :id_rol)
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



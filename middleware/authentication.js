const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {

    const authorization = req.get('authorization');

    let token = '';

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.split(' ')[1];
    }

    let decodedToken = {};
    try {
        decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
        console.log(Error);
    }

    if (!token || !decodedToken.id) {

        res.json({
            "error_message": "Token missing or invalid",
        });

    } else {

        next();

    }

};
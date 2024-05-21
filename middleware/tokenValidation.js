const jwt = require('jsonwebtoken');

const tokenValidation = async (req, res, next) => {

    try {
        const header = req.headers.authorization;

        if (!header) {
            return res.json({
                message: "Token not found"
            })
        }

        const token = header.split(" ")[1];
        const decoded = jwt.verify(token, 'screct_key');

        req.user = decoded;
        next()

    } catch (err) {
        return res.json({
            message: "Something went wrong"
        })
    }
}

module.exports = tokenValidation;

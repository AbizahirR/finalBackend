const jwt = require('jsonwebtoken')

const PRIVATE = process.env.JWT_KEY

const checkJWT = (req, res, next) => {
    const token = req.headers.authorization.split('Bearer ').pop()
    const decodedToken = jwt.decode(token)

    if (!decodedToken) return res.send({ error: 'Invalid Session'}).status(401)

    if (decodedToken.role === 'admin') {
        next()
    } else {
        return res.send({ error: 'No permissions' }).status(401)
    }
}

module.exports = {
    checkJWT
}
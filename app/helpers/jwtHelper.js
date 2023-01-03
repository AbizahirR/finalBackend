const jwt = require('jsonwebtoken')

const PRIVATE = process.env.JWT_KEY

const signToken = (data) => {
    return jwt.sign(data, PRIVATE, {expiresIn: '1h'})
}

const verifyToken = (token) => {
    return jwt.verify(token, PRIVATE)
}

module.exports = {
    signToken,
    verifyToken
}
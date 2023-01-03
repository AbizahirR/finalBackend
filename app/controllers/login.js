const userModel = require('../models/users')
const { signToken } = require('../helpers/jwtHelper')

const verifyLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findOne({ email })

        if (user && password == user.password) {
            const filteredData = {
                name: user.name,
                email: user.email,
                role: user.role,
                age: user.age
            }

            const token = signToken(filteredData)

            return res.send({ data: filteredData, token })
        } else {
            return res.send({ error: 'Invalid data'})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    verifyLogin
}
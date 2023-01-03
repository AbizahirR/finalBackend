const userModel = require('../models/users')

const getItems = async (req, res) => {
    try {
        const data = await userModel.find({})

        res.status(200).send({
            data: data
        })
    } catch (error) {
        console.log(e);
    }
}

const getItem = async (req, res) => {

}

const createItem = async (req, res) => {
    try {
        const { name, password, age, email } = req.body
        if (!name || !password || !age || !email) return res.send('Invalid data').status(400).end()

        if ((await userModel.find({ email })).length > 0) return res.send({ error: 'User already exists' })

        const data = await userModel.create({
            name,
            password,
            age,
            email
        })

        res.status(201).send(data)

    } catch (error) {
        console.log(error);
    }
}

const updateItem = async (req, res) => {

}

const deleteItem = async (req, res) => {

}

module.exports = {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
}
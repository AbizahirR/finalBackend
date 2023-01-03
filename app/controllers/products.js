const productModel = require('../models/products')
const multiparty = require('multiparty')

const getItems = async (req, res) => {
    try {
        const data = await productModel.find({})

        res.status(200).send({
            data: data
        })
    } catch (error) {
        console.log(e);
    }
}

const getItem = async (req, res) => {
    try {
        const { id } = req.params
        const data = await productModel.findById(id)
        
        if (data) {
            res.send(data)
        } else {
            res.send({error: 'Invalid Item Id'})
        }

    } catch (error) {
        res.send({error: 'Invalid'})
    }
}

const createItem = async (req, res) => {
        const IMAGE_UPLOAD_DIR = './public/uploads'
        let form = new multiparty.Form({uploadDir: IMAGE_UPLOAD_DIR})
        const allowedForm = ["jpg", "png", "gif", "jpeg"]

        form.parse(req, async (err, fields, files) => {
            if (err) return res.send({err: err.message})
            let { name, desc, price, stock} = fields
            const img = files ? `https://finalbackend-pa73.onrender.com/uploads/${files.img[0].path.split('uploads\\').pop()}` : null
            if (!name || !desc || !price || !stock || !img) return res.send({error: 'Invalid Data'}).status(400).end()
            name = name[0], desc = desc[0], price = price[0], stock = stock[0]

            console.log(img.split(".").pop());
            if (!allowedForm.includes(img.split(".").pop())) {
                return res.send({error: "Formato de imagen invalido"})
            }
            try {
                const data = await productModel.create({
                    name,
                    desc,
                    price,
                    stock,
                    img
                })
                console.log(data);
                res.status(201).send(data)
            } catch (error) {
                console.log(error);
            }
        })
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
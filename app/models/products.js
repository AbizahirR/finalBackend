const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})

module.exports = model('products', ProductSchema)
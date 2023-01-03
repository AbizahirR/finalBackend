require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { dbConnect } = require('./config/mongo.js')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.send({funcionando: "true"})
})

app.use('/api/1.0', require('./app/routes'))

const port = process.env.PORT

dbConnect()
app.listen(port, () => {
    console.log('Server started on port:', port);
})
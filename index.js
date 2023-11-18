require('dotenv').config()
const express = require("express")
const amqp = require("amqplib")
const app = express()
const mongoose = require("mongoose")
const productController = require("./controllers/productController")
const routes = require("./routes/routes")

mongoose.connect( process.env.dbURI)
    .then(() => {
        console.log("db connected successfully")
        app.listen("9090" , () => {
            console.log("listening on port 9090")
        })
    }).catch((err) => console.log(err))

app.use(express.json())
productController.connect()
app.use(routes)
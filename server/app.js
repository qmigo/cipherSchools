require('express-async-errors')
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors')
const router = require('./routes/index')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const errorHandlerMiddleware = require('./middleware/errorHandler')

app.use(cors())

app.use(express.json())
app.use(cookieParser())
app.use('/api/v1', router)
app.use(errorHandlerMiddleware)

mongoose.connect(process.env.MONGO_URI).then(()=>{
    mongoose.set('strictQuery', false)
    app.listen(port, ()=>{
        console.log(`Server listening at http://localhost:${port}`)
    })
}).catch((e)=>{
    console.log(e)
})

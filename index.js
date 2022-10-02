require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const router = require('./router/index')
const recipesRouter = require('./router/recipes-router')
const errorMiddleware = require('./middleware/error-middleware')

const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(express.json())
app.use(cookieParser())

app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/api', router)
app.use('/api/recipes', recipesRouter)

// включаем последним
app.use(errorMiddleware)

const PORT = process.env.PORT || '3300'

async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()
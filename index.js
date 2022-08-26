require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const router = require('./router/index')

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api', router)


const recipeFuncs = require('./functions/recipes')
app.get('/recipes/get-all', recipeFuncs.getAll)
app.get('/recipes/get', recipeFuncs.getById)
app.get('/recipes/get-by-str-request', recipeFuncs.getByStr)


// app.post('/users/register', userFuncs.registerUser)
// app.post('/users/auth', userFuncs.authentificateUser)

const PORT = process.env.PORT || '3300'

async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`app is listening on ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}

start()
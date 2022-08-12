const PORT = '3300'

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const { connectMongo } = require('./mongo')
connectMongo()


const recipeFuncs = require('./functions/recipes')
app.get('/recipes/get-all', recipeFuncs.getAll)



const userFuncs = require('./functions/users')
app.post('/users/register', userFuncs.registerUser)



app.listen(PORT, () => {
    console.log(`app is listening on http://localhost:${PORT}`);
})
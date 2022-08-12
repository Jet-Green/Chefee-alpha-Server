const PORT = '3300'

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())


const recipeFuncs = require('./functions/recipes')

app.get('/recipes/get-all', recipeFuncs.getAll)




app.listen(PORT, () => {
    console.log(`app is listening on http://localhost:${PORT}`);
})
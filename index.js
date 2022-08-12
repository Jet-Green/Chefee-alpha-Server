const PORT = '3300'

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(PORT, () => {
    console.log(`app is listening on http://localhost:${PORT}`);
})
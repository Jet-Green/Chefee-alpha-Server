const { Schema, model } = require('mongoose')


const User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
})

module.exports = model('User', User)
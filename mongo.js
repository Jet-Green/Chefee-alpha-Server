const mongoose = require('mongoose');

function connectMongo() {
    mongoose.connect('mongodb://localhost:27017/')
        .then(() => {
            console.log('mongo connected');
        })
        .catch((err) => console.error(err))
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        reqired: true
    },
    email: {
        type: String,
        reqired: true
    },
    password: {
        type: String,
        reqiured: true
    }
});

let User = mongoose.model('User', userSchema);

module.exports = {
    User,
    connectMongo
}
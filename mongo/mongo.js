const mongoose = require('mongoose');

function connectMongo() {
    mongoose.connect('mongodb://localhost:27017/Chefee')
        .then(() => {
            console.log('mongo connected');
        })
        .catch((err) => console.error(err))
}

module.exports = {
    connectMongo
}
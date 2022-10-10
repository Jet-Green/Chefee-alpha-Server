const { Schema, model } = require('mongoose');

const RecipeShema = new Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    previewImage: { type: String, required: true },
    ingredients: {
        type: [Object], required: true
    },
    portions: { type: Number, required: true },
    time: { type: String, required: true },
    likes: { type: Number, required: true },
    likedBy: [{ email: String }],
    reposts: { type: Number, required: true },
    comments: { type: Number, required: true },
    firstComment: { type: Object, required: false },
    steps: { type: Object, required: true },
    description: { type: String, required: true },
    health: { type: Object, required: true },
})

module.exports = model('Recipe', RecipeShema);
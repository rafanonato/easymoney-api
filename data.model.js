const mongoose = require('mongoose');

const UserData = new mongoose.Schema({
    recipeId: String,
    categoryId: Number,
    title: String,
    photo_url: String,
    photosArray: [],
    value: String,
    itens: [],
    description: String
});

module.exports = mongoose.model('Data', UserData);
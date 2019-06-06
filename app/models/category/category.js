const mongoose = require('mongoose');

// Categories Schema
const CategoriesSchema = mongoose.Schema({
    code:{
        type: String,
        required: true
    },
    name_th:{
        type: String,
        required: true
    },
    name_en:{
        type: String,
        required: true
    },
});

const Categories = module.exports = mongoose.model('categories', CategoriesSchema);
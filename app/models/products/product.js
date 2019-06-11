const mongoose = require('mongoose');

// Product Schema
const ProductSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name_th: {
        type: String,
        required: true
    },
    name_en: {
        type: String,
        required: true
    },
    description_th: {
        type: String,
        required: true
    },
    description_en: {
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true,
    }
});

const Product = module.exports = mongoose.model('products', ProductSchema);
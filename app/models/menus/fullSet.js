const mongoose = require('mongoose');

// User Schema
const FullSetSchema = mongoose.Schema({
    name_th:{
        type: String,
        required: true
    },
    name_en:{
        type: String,
        required: true
    },
    category_id:{
        type: String,
        required: true,
    }
});

const FullSet = module.exports = mongoose.model('full_set', FullSetSchema);
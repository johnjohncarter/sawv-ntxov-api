require('dotenv').config();

let responses = require('../baseResponse');


exports.index = function (req, res, next) {
    return res.json(responses.success('create upload image successfully'), 200);
};
let responses = require('../baseResponse');
let Product = require('../../models/products/product');

exports.index = async function (req, res, next) {
    let products = [];
    try {
        products = await Product.find();
        if (!products) {
            return res.json(responses.error('have something went wrong !!!'), 401);
        }
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success(products), 200);
};


exports.create = async function (req, res, next) {
    let profile = {
        code: req.body.code,
        name_th: req.body.name_th,
        name_en: req.body.name_en,
        description_th: req.body.description_th,
        description_en: req.body.description_en,
        category_id: req.body.category_id,
    };

    try {
        let product = await Product.create(profile);
        if (!product) {
            return res.json(responses.error('have something went wrong !!!'), 401);
        }
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success('save data successfully'), 200);
};

exports.update = async function (req, res, next) {
    let product_id = req.params.id;
    try {
        let product = await Product.update({_id: product_id}, req.body);
        if (!product) {
            return res.json(responses.error('have something went wrong !!!'), 401);
        }
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success('save data successfully'), 200);
};

exports.delete = async function (req, res, next) {
    let product_id = req.params.id;
    try {
        let product = await Product.remove({_id: product_id});
        if (!product.deletedCount) {
            return res.json(responses.error('can not delete this user !!!'), 401);
        }
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success('delete data successfully'), 200);
};
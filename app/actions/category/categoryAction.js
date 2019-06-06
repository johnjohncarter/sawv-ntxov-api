let responses = require('../baseResponse');
let Category = require('../../models/category/category');

exports.index = async function (req, res, next) {
    let categories = [];
    try {
        categories = await Category.find();
        if (!categories) {
            return res.json(responses.error('have something went wrong !!!'), 401);
        }
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success(categories), 200);
};


exports.create = async function (req, res, next) {
    let profile = {
        code: req.body.code,
        name_th: req.body.name_th,
        name_en: req.body.name_en,
    };

    try {
        let category = await Category.create(profile);
        if (!category) {
            return res.json(responses.error('have something went wrong !!!'), 401);
        }
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success('save data successfully'), 200);
};


exports.update = async function (req, res, next) {
    let category_id = req.params.id;
    try {
        let category = await Category.update({_id: category_id}, req.body);
        if (!category) {
            return res.json(responses.error('have something went wrong !!!'), 401);
        }
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success('save data successfully'), 200);
};

exports.delete = async function (req, res, next) {
    let category_id = req.params.id;
    try {
        let category = await Category.remove({_id: category_id});
        if (!category.deletedCount) {
            return res.json(responses.error('can not delete this user !!!'), 401);
        }
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success('delete data successfully'), 200);
};
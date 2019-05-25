let responses = require('../baseResponse');
let User = require('../../models/members/user');
const { validationResult } = require('express-validator/check');
let password_hash = require('password-hash');

exports.index = function (req, res, next) {
    User.find({}, function (err, response) {
        if (err) {
            return res.json(responses.error('have something went wrong !!!'), 401);
        }
        return res.json(responses.success(response), 200);
    });
};

exports.show = async function (req, res, next) {
    let user_id = req.body.id;
    let user = {};
    try {
        // user = await User.findOne(user_id).select("+password");
        user = await User.findOne(user_id);
        if (!user) {
            return res.json(responses.error('have something went wrong !!!'), 401);
        }
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success(user), 200);
};

exports.create = async function (req, res, next) {
    const validator = validationResult(req);
    if (!validator.isEmpty()) {
        return res.json(responses.error(validator.array()), 401);
    }

    let profile = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: password_hash.generate(req.body.password)
    };

    try {
        let user = await User.create(profile);
        if (!user) {
            return res.json(responses.error('have something went wrong !!!'), 401);
        }
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success('save data successfully'), 200);
};

exports.update = async function (req, res, next) {
    let user_id = req.params.id;
    try {
        let user = await User.update({_id: user_id}, req.body);
        if (!user) {
            return res.json(responses.error('have something went wrong !!!'), 401);
        }
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success('save data successfully'), 200);
};

exports.delete = async function (req, res, next) {
    let user_id = req.params.id;
    try {
        let user = await User.remove({_id: user_id});
        if (!user.deletedCount) {
            return res.json(responses.error('can not delete this user !!!'), 401);
        }
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success('delete data successfully'), 200);
};

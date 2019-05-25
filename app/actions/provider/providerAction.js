let { success, error } = require('../baseResponse');
let Provider = require('../../models/members/provider');

exports.index = function (req, res, next) {
    Provider.find({}, function (err, response) {
        if (err) {
            return res.json(error('have something went wrong !!!'), 401);
        }
        return res.json(success(response), 200);
    });
};

exports.create = function (req, res, next) {
    // let profile = {
    //     name: 'Jack',
    //     email: 'jack@m.com',
    //     username: 'Jack Harper',
    //     password: '123456',
    // };
    // Provider.create(profile, function (err, response) {
    //     if (err) {
    //         return res.json(error('have something went wrong !!!'), 401);
    //     }
    //     return res.json(success('save data successfully'), 200);
    // });
};
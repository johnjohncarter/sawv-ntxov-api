let responses = require('../baseResponse');
let User = require('../../models/members/user');
let Admin = require('../../models/members/admin');
const { validationResult } = require('express-validator/check');
let password_hash = require('password-hash');
let jwt = require('jsonwebtoken');

exports.signInEmail = async function (req, res, next) {
    const validator = validationResult(req);
    if (!validator.isEmpty()) {
        return res.json(responses.error(validator.array()), 401);
    }

    let email = req.body.email;
    let password = req.body.password;
    let token = '';

    try {
        let user = await User.findOne({email: email}).select('+password');
        if (!user) {
            return res.json(responses.error('this email not subscription'), 401);
        }
        if (!password_hash.verify(password, user['password'])) {
            return res.json(responses.error('this password not math!!'), 401);
        }
        token = jwt.sign({ id: user._id, iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success(token), 200);
};

exports.signInAdmin = async function (req, res, next) {
    const validator = validationResult(req);
    if (!validator.isEmpty()) {
        return res.json(responses.error(validator.array()), 401);
    }

    let email = req.body.email;
    let password = req.body.password;
    let token = '';

    try {
        let admin = await Admin.findOne({email: email}).select('+password');
        if (!admin) {
            return res.json(responses.error('this email not subscription'), 401);
        }
        if (!password_hash.verify(password, admin['password'])) {
            return res.json(responses.error('this password not math!!'), 401);
        }
        token = jwt.sign({ id: admin._id, iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');
    } catch (err) {
        return res.json(responses.error(err), 401);
    }
    return res.json(responses.success({ token: token }), 200);
};

exports.getUserId = async function (req, res, next) {
    let token = req.headers['access-token'];
    // let token = req.query.token;
    let decoded = jwt.verify(token, 'shhhhh');
    return res.json(responses.success(decoded), 200);
};
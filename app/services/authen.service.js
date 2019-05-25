const { check, validationResult } = require('express-validator/check');
let User = require('../models/members/user');

module.exports = {
    signInEmail: function () {
        return [
            check('email').isEmail(),
            check('password').isLength({ min: 5 })
        ]
    },
    createUser: function () {
        return [
            check('email')
                .isEmail()
                .custom(email => {
                    return User.findOne({ 'email': email }).then(user => {
                        if (user) {
                            return Promise.reject('this e-mail already in use');
                        }
                    });
                }),
            check('password')
                .isLength({ min: 5 })
                .withMessage('password must have more than 5 characters')
        ]
    }
};
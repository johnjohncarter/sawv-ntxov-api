const { check, validationResult } = require('express-validator/check');

module.exports = {
    signInEmail: function () {
        return [
            check('email').isEmail(),
            check('password').isLength({ min: 5 })
        ]
    },
};
let responses = require('../baseResponse');

exports.index = function (req, res, next) {
    return res.json(responses.success('55555555555555555555555555555'), 200);
};

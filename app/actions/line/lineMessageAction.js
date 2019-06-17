const responses = require('../baseResponse');
// const request = require('request');

exports.sendMessage = async function (req, res, next) {
    // request({
    //     method: 'POST',
    //     uri: 'https://notify-api.line.me/api/notify',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     auth: {
    //         'bearer': token
    //     },
    //     form: {
    //         message: message
    //     }
    // }, (err, httpResponse, body) => {
    //     if(err){
    //         console.log(err);
    //     } else {
    //         res.json({
    //             httpResponse: httpResponse,
    //             body: body
    //         });
    //     }
    // });
    return res.json(responses.success('send successfully'), 200);
};
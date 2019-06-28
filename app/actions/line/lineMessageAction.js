const responses = require('../baseResponse');
// const request = require('request');
const line = require('@line/bot-sdk');

const config = {
    channelAccessToken: process.env.channelAccessToken,
    channelSecret: process.env.channelSecret
};

const client = new line.Client(config);

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
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result));
    return res.json(responses.success('send successfully'), 200);
};

function handleEvent(event) {

    console.log(event);
    if (event.type === 'message' && event.message.type === 'text') {
        handleMessageEvent(event);
    } else {
        return Promise.resolve(null);
    }
}

function handleMessageEvent(event) {
    var msg = {
        type: 'text',
        text: 'สวัสดีครัช'
    };

    return client.replyMessage(event.replyToken, msg);
}
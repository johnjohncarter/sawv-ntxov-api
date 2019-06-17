let express = require('express');
let router = express.Router();

let lineMessageAction = require("../../actions/line/lineMessageAction");

router.post('/send-message', lineMessageAction.sendMessage);

module.exports = router;
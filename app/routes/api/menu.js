let express = require('express');
let router = express.Router();

let fullSetAction = require("../../actions/list-menus/fullSetAction");

router.get('/full-set', fullSetAction.index);

module.exports = router;
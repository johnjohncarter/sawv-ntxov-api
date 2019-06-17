let express = require('express');
let router = express.Router();

let line = require('../../../app/routes/line/line');

router.use('', line);

module.exports = router;
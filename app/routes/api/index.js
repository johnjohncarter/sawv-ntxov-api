let express = require('express');
let router = express.Router();

let members = require('../../../app/routes/api/members');

router.use('', members);

module.exports = router;
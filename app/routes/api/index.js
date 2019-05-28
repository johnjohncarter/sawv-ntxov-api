let express = require('express');
let router = express.Router();

let uploads1 = require('../../../app/routes/api/uploads');
let members = require('../../../app/routes/api/members');

router.use('', members);
router.use('', uploads1);

module.exports = router;
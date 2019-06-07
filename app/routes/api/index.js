let express = require('express');
let router = express.Router();

let uploads = require('../../../app/routes/api/uploads');
let members = require('../../../app/routes/api/members');
let categories = require('../../../app/routes/api/category');
let menu = require('../../../app/routes/api/menu');

router.use('', members);
router.use('', uploads);
router.use('', categories);
router.use('', menu);

module.exports = router;
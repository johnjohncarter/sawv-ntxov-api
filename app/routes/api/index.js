let express = require('express');
let router = express.Router();

let uploads = require('../../../app/routes/api/uploads');
let members = require('../../../app/routes/api/members');
let categories = require('../../../app/routes/api/category');

router.use('', members);
router.use('', uploads);
router.use('', categories);

module.exports = router;
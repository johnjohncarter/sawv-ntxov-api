let express = require('express');
let router = express.Router();

let uploadImageAction = require("../../actions/uploads/uploadImageAction");

router.post('/upload-image', uploadImageAction.index);

module.exports = router;
let express = require('express');
let router = express.Router();

let categoryAction = require("../../actions/category/categoryAction");

router.get('/categories', categoryAction.index);
router.post('/categories', categoryAction.create);
router.put('/categories/:id', categoryAction.update);
router.delete('/categories/:id', categoryAction.delete);

module.exports = router;
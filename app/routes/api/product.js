let express = require('express');
let router = express.Router();

let productAction = require("../../actions/products/productAction");

router.get('/product', productAction.index);
router.post('/product', productAction.create);
router.put('/product/:id', productAction.update);
router.delete('/product/:id', productAction.delete);

module.exports = router;
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test',
    function(req, res, next) {
        return res.json('5555555');
    });
module.exports = router;

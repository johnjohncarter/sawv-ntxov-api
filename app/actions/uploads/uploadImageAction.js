require('dotenv').config();
let multer = require('multer');
let responses = require('../baseResponse');

exports.index = function (req, res, next) {
    let storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, './public/uploads');
        },
        filename: (req, file, callback) => {
            callback(null, Date.now()+'-'+file.originalname)
        }
    });

    let upload = multer({storage: storage}).single('photo');
    upload(req, res, function(err) {
        if(err) {
            console.log('Error Occured');
        }
        return res.json(responses.success('create upload image successfully'), 200);
    });
};
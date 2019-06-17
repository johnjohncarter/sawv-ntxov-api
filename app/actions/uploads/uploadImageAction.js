require('dotenv').config();
let multer = require('multer');
let responses = require('../baseResponse');

exports.index = async function (req, res, next) {
    let storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, './public/uploads');
        },
        filename: (req, file, callback) => {
            callback(null, Date.now() + '-' + file.originalname)
        }
    });

    let upload = multer({storage: storage}).single('photo');
    let upload_result = await upload(req, res, function (err) {
        if(err) {
            return res.json(responses.error('create upload image fail!!'), 401);
        }
        return res.json(responses.success('create upload image successfully!!'), 200);
    });
};
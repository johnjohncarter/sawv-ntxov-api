let userAction = require("../../actions/user/userAction");
let adminAction = require("../../actions/admin/adminAction");
let signInAction = require("../../actions/authenticate/signIn");

let providerAction = require("../../actions/provider/providerAction");
let authenService = require("../../services/authen.service");

let express = require('express');
let router = express.Router();

router.get('/users', userAction.index);
router.get('/user/:id', userAction.show);
router.post('/user', authenService.createUser(), userAction.create);
router.put('/user/:id', userAction.update);
router.delete('/user/:id', userAction.delete);
router.post('/user-sign-in', authenService.signInEmail(), signInAction.signInEmail);

router.get('/user-get-id', signInAction.getUserId);

router.get('/admins', adminAction.index);
router.get('/admin/:id', adminAction.show);
router.post('/admin', authenService.createUser(), adminAction.create);
router.put('/admin/:id', adminAction.update);
router.delete('/admin/:id', adminAction.delete);

router.post('/admin-sign-in', authenService.signInEmail(), signInAction.signInAdmin);

router.get('/provider', providerAction.index);

module.exports = router;

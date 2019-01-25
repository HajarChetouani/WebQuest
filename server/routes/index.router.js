const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlForm=require('../controllers/form.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/add',ctrlForm.addF);
router.get('/get/:titre',ctrlForm.get);
module.exports = router;




const express = require('express');



const AddUser = require('./../controller/users/add_user');
const GetUser_accto_id = require('./../controller/users/get_user_accto_id');





const router = express.Router();


router.post('/register', AddUser);
router.get('/user', GetUser_accto_id)

module.exports = router;
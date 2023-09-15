const express = require('express');
const  path = require('path');


const UploadFile = require('../middleware/multer/add_img');

const AddItems = require('./../controller/items/add_items');

const GetImg = require('./../controller/items/get_image');

const GetAll = require('./../controller/items/get_allitems');
const GetItems_accto_catergory = require('../controller/items/get_items_accto_catergory');
const GetItems_accto_id = require('../controller/items/item_accto_id');



const router = express.Router();

router.use(express.static(path.join((__dirname, "uploads"))));

router.post('/add',UploadFile.array('file'), AddItems);

router.get('/get', GetImg)

router.get('/getall', GetAll)

router.get('/getitems_accto_catergory', GetItems_accto_catergory)

router.get('/getitems_accto_id', GetItems_accto_id)

module.exports = router;
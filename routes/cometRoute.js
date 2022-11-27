
const express = require('express');
const multer = require('multer');
const path = require('path')
const { homeController, adminPanelController, sliderController } = require('../controllers/homeController');

const router = express.Router();




//multer config
const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, path.join(__dirname, '../public/images/bg/'));
    },
    filename : (req, file, cb)=>{
        cb(null, Date.now() + '_' + file.originalname)
    }
});


//multer middleware
const sliderMiddleware = multer({
    storage : storage
}).single('slide_image');



router.get('/', homeController);
router.get('/admin', adminPanelController);
router.post('/admin', sliderMiddleware, sliderController);


module.exports = router;

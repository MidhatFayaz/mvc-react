const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const multer = require('multer');
const path =require('path')
// Configure multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Middleware for handling image uploads
const upload = multer({ storage: storage });



//Home Routing 
router.get('/', homeController.indexFunction);
router.get('/category', homeController.categoryFunction);
router.post('/category',upload.single('image'),homeController.categoryFunction1);
router.delete('/category', homeController.categoryFunction2);
router.get('/subcategory', homeController.subcategoryFunction);
router.get('/productattribute', homeController.productattributeFunction);
router.get('/editattribute', homeController.editattributeFunction);
router.get('/productlist', homeController.productlistFunction);
router.get('/limitedstock', homeController.limitedstockFunction);
router.get('/addnewproduct', homeController.addnewproductFunction);
router.get('/bulkimport', homeController.bulkimportFunction);
router.get('/bulkexport', homeController.bulkexportFunction);
router.get('/message', homeController.messageFunction);
router.get('/salesreport', homeController.salesreportFunction);
router.get('/orderreport', homeController.orderreportFunction);
router.get('/earningreport', homeController.earningreportFunction);
router.get('/expensereport', homeController.expensereportFunction);
router.get('/customersearch', homeController.customersearchFunction);
router.get('/keywordsearch', homeController.keywordsearchFunction);
// router.get('/businesssetup', homeController.businesssetupFunction);

router.get('/login', homeController.loginFunction);
router.get('/users', homeController.getAllUser);
router.post('/users', homeController.createUser);

// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;
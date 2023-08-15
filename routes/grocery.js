const express = require('express');
const groceryController = require('../controllers/groceryController');
const router = express.Router();

router.get('/', groceryController.getGroceries)

module.exports = router;
const Grocery = require('../models/grocery');

exports.getAddGroceries = (req, res, next) => {
    res.send(Grocery.fetchAll());
};
const Grocery = require('../models/grocery');

exports.getAllGroceries = async (req, res, next) => {
    try {
        const [allGroceries] = await Grocery.fetchAll();
        res.status(200).json(allGroceries);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.postGrocery = async (req, res, next) => {
    try {
        const postResponse = await Grocery.post(req.body.item);
        res.status(201).json(postResponse);
    } catch (err) { }
};
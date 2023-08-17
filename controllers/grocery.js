const Grocery = require('../models/grocery');

exports.getAllGroceries = async (req, res, next) => {
    try {
        const [allGroceries] = await Grocery.fetchAll();
        res.status(200).json(allGroceries);
    }
};
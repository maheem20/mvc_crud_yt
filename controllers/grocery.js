const Grocery = require('../models/grocery');

exports.getAllGroceries = async (req, res, next) => {
    try {
        const [allGroceries] = await Grocery.fetchAll();
    }
};
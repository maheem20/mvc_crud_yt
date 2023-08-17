exports.get404 = (req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
}

exports.get500 = (req, res, next) => { }
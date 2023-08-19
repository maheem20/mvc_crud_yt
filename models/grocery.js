const db = require('../util/database');

module.exports = class Grocery {
    constructor(id, item) {
        this.id = id;
        this.item = item;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM groceries');
    }

    static post(item) {
        return db.execute('INSERT INTO groceries (item) VALUES (?)', [item]);
    }
};
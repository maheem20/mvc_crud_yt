module.exports = class Grocery {
    constructor(id, item) {
        this.id = id;
        this.item = item;
    }

    static fetchAll() {
        [
            {
                id: 1,
                name: 'Milk'
            },
            {
                id: 2,
                name: 'Eggs'
            }
        ];
    }
}
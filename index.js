const express = require('express');

const app = express();
const ports = process.env.PORT || 3000;

const groceries = [
    {
        id: 1,
        name: 'Milk'
    },
    {
        id: 2,
        name: 'Eggs'
    }
];

app.get('/', (req, res) => {
    res.send(groceries);
});

app.listen(ports, () => console.log(`Server listening on port ${ports}`));
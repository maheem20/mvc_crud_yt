const express = require('express');

const app = express();
const ports = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(ports, () => console.log(`Server listening on port ${ports}`));
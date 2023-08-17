const express = require('express');
const groceryRoutes = require('./routes/grocery')
const errorController = require('./controllers/error');
const app = express();
const ports = process.env.PORT || 3000;

app.use('/groceries', groceryRoutes);

app.listen(ports, () => console.log(`Server listening on port ${ports}`));
const express = require('express');
const groceryRoutes = require('./routes/grocery')
const errorController = require('./controllers/error');
const app = express();
const ports = process.env.PORT || 3000;

app.use('/groceries', groceryRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`Server listening on port ${ports}`));
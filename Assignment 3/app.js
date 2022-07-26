const express = require('express');
const app = express();

const userRoutes = require('./routes/user');
const storeRoutes = require('./routes/store');

const path = require('path');
app.use(express.static(path.join(__dirname,'public')));

app.use(userRoutes);
app.use(storeRoutes);
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);
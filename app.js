const http = require('http');
const path = require('path');
const rootDir = require('./util/path');

const express = require('express');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

// The order of the routes also matters here
app.use('/admin', adminData);
app.use(shopRoutes);
// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
// })

app.listen(3000);
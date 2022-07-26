// CORE Pakages
const http = require('http');
const path = require('path');

//3rd Party packages
const express = require('express');

//Custom file imports
const rootDir = require('./util/path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.engine('hbs', expressHbs({layoutDir: 'views/layouts/', defaultLayout: 'main-layout', extname:'hbs'}));
app.set('view engine', 'ejs');
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug');
app.set('views', './views');
 
app.use(express.static(path.join(__dirname, 'public')));

// The order of the routes also matters here
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "Page Not Found", path: ""});
})

app.listen(8000);
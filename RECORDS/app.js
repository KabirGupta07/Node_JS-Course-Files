const http = require('http');
// const routes = require("./routes")
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use((req, res, next) => {
//     console.log("1st Middleware");
//     next();// This function passes on the request to the next middleware
// });

// app.use((req, res, next) => {
//     console.log("I am in the next Middleware");
//     res.send("<h1>HELLO THERE USER</h1>"); // The Content-Type is by default set to text/html 
// });

app.use(bodyParser.urlencoded({extended: false}));

app.get("/add-product", (req, res, next) => {
    res.send('<html><form action="/product" method="POST"><input type="text" name="title"><button type="submit">SUBMIT</button></input></html>'); 
}); 

app.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}); 

app.use("/", (req, res, next) => {
    res.send("<h1>Hello from Express!</h1>"); 
});

// const server = http.createServer(app);
// server.listen(3000);

//  The above implementation is done similarly by app.js
app.listen(3000);
const express = require("express");
const app = express();

app.use("/users", (req, res, next) =>{ 
    console.log("2nd Middleware");
    res.send("<h1>Hello to the user!</h1>");
});

app.use("/", (req, res, next) => {
    console.log("1st Middleware");
    // next();
    res.send("<h1>Hello to the user!</h1>");
});

app.listen(3000);
const express = require("express");
const app =  express();

app.use(express.static("public"));


app.get("/home", (req, res, next) => {
    res.sendFile(__dirname +'/view/home.html')
})

app.get("/about", (req, res, next) => {
    res.sendFile(__dirname +'/view/about.html')
})

app.get("/works", (req, res, next) => {
    res.sendFile(__dirname +'/view/works.html')
})

app.listen(3000, () => {
    console.log("listening")
})
const express = require("express");
const app =express();

const bodyparser = require("body-parser");
const path = require("path");
const ejs= require("ejs");
const PORT = process.env.PORT || 8010

app.use(bodyparser.urlencoded({ extended : true}))
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
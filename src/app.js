const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")))

const port = process.env.PORT||3000

app.listen(port, function(){
    console.log(`El servidor está corriendo en el puerto ${port}`)
})

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname,"/views/register.html"))
})

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"/views/login.html"))
})
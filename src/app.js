const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")))

app.listen(3000, function(){
    console.log("El servidor está corriendo en el puerto 3000")
})

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
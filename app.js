const express = require ("express");
const app = express();
const path = require ("path");
<<<<<<< HEAD
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto " + PORT);
=======
const port = process.env.PORT || 3001;

app.use(express.static("public"));

app.listen(port,()=>{
    console.log("Servidor escuchando en el puerto " + port);
>>>>>>> 91336dfbccdafba3d275a8b4bc92f0cd9ee05d84
});

app.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname,"/views/home.html"));
})

app.get("/home", function(req,res){
    res.sendFile(path.join(__dirname,"/views/home.html"));
});

app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname,"/views/register.html"));
});

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"/views/login.html"));
});

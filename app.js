const express = require ("express");
const app = express();
const path = require ("path");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto " + PORT);
});

app.get("/",(req,res) =>{
    res.send("Anda a Home!");
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

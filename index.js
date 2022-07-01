// Importar o package express
const express = require("express");

// Instanciar o express
const app = express();

// Configuração da primeira rota
//app.use("/", (req,res) => res.send("Olá mundo"));
app.get("/home", function (req,res){
    res.sendFile(__dirname + "/html/index.html");
});

// rota para pagina projetos
app.get("/projetos", function (req,res){
    res.sendFile(__dirname + "/html/projetos.html");
});

// rota para pagina contatos
app.get("/contatos", function (req,res){
    res.sendFile(__dirname + "/html/contatos.html");
});
// Informando ao node qual porta ele deve usar
app.listen(process.env.PORT || 3000, console.log("Servidor Up"));


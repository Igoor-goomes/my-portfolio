// Importar o package express
const express = require("express");

// Instanciar o express
const app = express();

// Configuração da primeira rota
// app.use("/", express.static(__dirname + "/sua-pasta"))
app.use("/", (req,res) => res.sendFile("/index.html"));
//app.use("/", express.static(__dirname + "/index.html"));

// Informando ao node qual porta ele deve usar
app.listen(process.env.PORT || 3000, console.log("Servidor Up"));


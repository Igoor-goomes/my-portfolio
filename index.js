// Importar o package express
const express = require("express");

// Instanciar o express
const app = express();

// Configuração da primeira rota
app.use("/", (req,res) => res.send("Olá Mundo"));

// Informando ao node qual porta ele deve usar
app.listen(3000, console.log("Servidor Up"));


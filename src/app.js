// src/app.js
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();
// Middleware para ler JSON no body
app.use(express.json());
// Documentação swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Importar rotas
const eventoRoutes = require("./routes/eventoRoutes");
const participanteRoutes = require("./routes/ParticipanteRoutes");
const inscricaoRoutes = require("./routes/inscricaoRoutes");
// Usar rotas com prefixo
app.use("/eventos", eventoRoutes);
app.use("/participantes", participanteRoutes);
app.use("/inscricoes", inscricaoRoutes);

app.get("/", (req, res) => {
    res.json({
        mensagem: "API De Notificaçoes",
        rotas: {
            eventos: "/eventos",
            participantes: "/participantes",
        },
        rotas: {
            eventos: '/eventos',
            participantes: '/participantes',
            inscricoes: '/inscricoes'
        },
    });
});

module.exports = app;
// src/routes/ParticipanteRoutes.js
// Crie o router, importe o controller e defina as 5 rotas
// siga exatamente o padrão do EventoRoutes.js

/**
* @swagger
* components:
*   schemas:
*     Participante:
*       type: object
*       required:
*         - nome
*         - email 
*       properties:
*         id:
*           type: integer
*           description: ID gerado automaticamente
*         nome:
*           type: string
*           description: Nome do participante
*         email:
*           type: string
*           description: E-mail do participante
*       example:
*         id: 1
*         nome: Ana Silva
*         email: ana@email.com
*/
// Agora documente cada rota seguindo o padrão do eventoRoutes.js
// Dica: copie os blocos de comentário dos Eventos e adapte para Participantes
// Lembre de mudar: tags, summary, schema, parâmetros e exemplos

const express = require("express");
const router = express.Router();
const ParticipanteController = require("../controllers/ParticipanteController");
router.get("/", ParticipanteController.index); // GET /participantes    
router.get("/:id", ParticipanteController.show); // GET /participantes/:id
router.post("/", ParticipanteController.store); // POST /participantes
router.put("/:id", ParticipanteController.update); // PUT /participantes/:id
router.delete("/:id", ParticipanteController.destroy); // DELETE /participantes/:id

module.exports = router;

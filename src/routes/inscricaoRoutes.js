// src/routes/inscricaoRoutes.js
/**
* @swagger
* components:
*   schemas:
*     Inscricao:
*       type: object
*       properties:
*         id:
*           type: integer
*         eventoId:
*           type: integer
*         participanteId:
*           type: integer
*         dataInscricao:
*           type: string
*         status:
*           type: string
*           enum: [confirmada, cancelada]
*       example:
*         id: 1
*         eventoId: 1
*         participanteId: 1
*         dataInscricao: "2025-08-01T10:30:00.000Z"
*         status: confirmada
*/
// Documente as rotas: POST /, GET /, GET /evento/:eventoId, PATCH /:id/cancelar


const express = require("express");
const router = express.Router();
const InscricaoController = require("../controllers/InscricaoController");
router.post("/", InscricaoController.store);
router.get("/", InscricaoController.index);
router.get("/evento/:eventoId", InscricaoController.listarPorEvento);
router.patch("/:id/cancelar", InscricaoController.cancelar);
module.exports = router;
// src/controllers/InscricaoController.js
const InscricaoModel = require("../models/InscricaoModel");
// POST /inscricoes — criar uma inscrição
function store(req, res) {
    const {inscricoes = InscricaoModel.listarTodos()} = req.body;
    const { eventoId, participanteId } = req.body;
    if (!eventoId || !participanteId) {
        return res
            .status(400)
            .json({ erro: "eventoId e participanteId são obrigatórios" });
    }
    const resultado = InscricaoModel.criar(
        parseInt(eventoId),
        parseInt(participanteId),
    );
    // Se o resultado tem a propriedade "erro", algo deu errado
    if (resultado.erro) {
        return res.status(400).json(resultado);
    }
    res.status(201).json(resultado);
}
// GET /inscricoes — listar todas
function index(req, res) {
    const inscricoes = InscricaoModel.listarTodos();
    res.json(inscricoes);
    // Implemente: retorne todas as inscrições
    // _________________________________
}
// GET /inscricoes/evento/:eventoId — listar inscrições de um evento
function listarPorEvento(req, res) {
    const eventoId = parseInt(req.params.eventoId);
    const inscricoes = InscricaoModel.listarPorEvento(eventoId);
    res.json(inscricoes);
    // Implemente: use InscricaoModel.listarPorEvento()
    // _________________________________
}
// PATCH /inscricoes/:id/cancelar — cancelar uma inscrição
function cancelar(req, res) {
    const id = parseInt(req.params.id);
    const resultado = InscricaoModel.cancelar(id);
    if (resultado.erro) {
        return res.status(400).json(resultado);
    }
    // Implemente: use InscricaoModel.cancelar()

    // Se retornar null, responda 404
    // Se retornar a inscrição, responda com ela
    // _________________________________
    // _________________________________
    // _________________________________
}
module.exports = { store, index, listarPorEvento, cancelar };
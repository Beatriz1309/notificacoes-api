// src/controllers/ParticipanteController.js
const ParticipanteModel = require("../models/ParticipanteModel");
function index(req, res) {
    const participantes = ParticipanteModel.listarTodos();
    res.json(participantes);
// Liste todos os participantes
// _________________________________
}
function show(req, res) {
const id = parseInt(req.params.id);
 const participante = ParticipanteModel.buscarPorId(id);
    if (!participante) {
        return res.status(404).json({ erro: "Participante não encontrado" });
    }
    res.json(participante);
// Busque o participante por ID
// Se não encontrar, retorne 404 com mensagem de erro
// Se encontrar, retorne o participante
// _________________________________
// _________________________________
// _________________________________
}
function store(req, res) {
const { nome, email } = req.body;
// Valide: nome e email são obrigatórios
if (!nome || !email) {
return res.status(400).json({ erro: "Nome e email são obrigatórios" });
}

const novoParticipante = ParticipanteModel.criar({
        nome,
        email
    });
    res.status(201).json(novoParticipante);
}
// Crie o participante e retorne com status 201
// _________________________________
// _________________________________


function update(req, res) {
const id = parseInt(req.params.id);
 const participanteAtualizado = ParticipanteModel.atualizar(id, req.body);
    if (!participanteAtualizado) {
        return res.status(404).json({ erro: "Participante não encontrado" });
    }
    else {
        res.json(participanteAtualizado);
    }
// Atualize o participante
// Se não encontrar, retorne 404
// Se encontrar, retorne o participante atualizado
// _________________________________
// _________________________________
// _________________________________
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const deletado = ParticipanteModel.deletar(id);
        if (!deletado) {
            return res.status(404).json({ erro: "Participante não encontrado" });
        }
        res.status(204).send();
    }
    // Delete o participante
    // Se não encontrar, retorne 404
    // Se encontrar, retorne 204 sem conteúdo
    // _________________________________
    // _________________________________
    // _________________________________    

module.exports = { index, show, store, update, destroy};

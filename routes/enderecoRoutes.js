const express = require('express');
const router = express.Router();
const enderecoController = require('../controllers/enderecoController');

// Criar novo endereço para um usuário
router.post('/:id', enderecoController.criarEndereco);

// Atualizar endereço do usuário
router.put('/:id', enderecoController.atualizarEndereco);

// Buscar endereço pelo id do usuário
router.get('/:id', enderecoController.buscarEnderecoPorUsuario);

module.exports = router;

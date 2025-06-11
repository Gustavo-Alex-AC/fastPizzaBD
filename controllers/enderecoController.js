const { Endereco, Usuario } = require('../models');

module.exports = {
  // Criar endereço
  async criarEndereco(req, res) {
    try {
      const { rua, bairro, municipio, provincia } = req.body;
      const id_usuario = req.params.id;

      // Verifica se o usuário existe
      const usuario = await Usuario.findByPk(id_usuario);
      if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });

      const endereco = await Endereco.create({
        rua,
        bairro,
        municipio,
        provincia,
        id_usuario,
      });

      res.status(201).json(endereco);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar endereço', details: error.message });
    }
  },

  // Atualizar endereço
  async atualizarEndereco(req, res) {
    try {
      const id_usuario = req.params.id;
      const { rua, bairro, municipio, provincia } = req.body;

      const endereco = await Endereco.findOne({ where: { id_usuario } });
      if (!endereco) return res.status(404).json({ error: 'Endereço não encontrado' });

      await endereco.update({ rua, bairro, municipio, provincia });

      res.json(endereco);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar endereço', details: error.message });
    }
  },

  // Buscar endereço por usuário
  async buscarEnderecoPorUsuario(req, res) {
    try {
      const id_usuario = req.params.id;

      const endereco = await Endereco.findOne({ where: { id_usuario } });
      if (!endereco) return res.status(404).json({ error: 'Endereço não encontrado' });

      res.json(endereco);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar endereço', details: error.message });
    }
  },
};

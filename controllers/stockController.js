const { Pizza } = require("../models");

exports.updateStock = async (req, res) => {
  const { id } = req.params;
  const { soldOut } = req.body;

  try {
    const pizza = await Pizza.findByPk(id);

    if (!pizza) {
      return res.status(404).json({ error: "Pizza não encontrada" });
    }

    pizza.soldOut = soldOut;
    await pizza.save();

    res.json({ message: "Disponibilidade atualizada", pizza });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar disponibilidade", details: error.message });
  }
};

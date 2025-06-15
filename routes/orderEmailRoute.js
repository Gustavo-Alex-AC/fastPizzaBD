const express = require("express");
const router = express.Router();
const { sendOrderEmail } = require("../utils/sendOrderEmail");

router.post("/send-order-email", async (req, res) => {
  try {
    const { email, nome, orderId, total, itens } = req.body;
    await sendOrderEmail({ email, nome, orderId, total, itens });

    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({ error: "Erro ao enviar email." });
  }
});

module.exports = router;

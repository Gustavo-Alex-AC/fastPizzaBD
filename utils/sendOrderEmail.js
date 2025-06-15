const nodemailer = require("nodemailer");

async function sendOrderEmail({ email, nome, orderId, total, itens }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // seu email
      pass: process.env.EMAIL_PASS, // senha de app (não a senha normal!)
    },
  });

  const htmlItems = itens
    .map(
      (item) =>
        `<li><strong>${item.name}</strong> - Quantidade: ${item.quantity}</li>`
    )
    .join("");

  const mailOptions = {
    from: `"Fast-Pizza" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Pedido Recebido #${orderId} - Fast-Pizza`,
    html: `
    <div style="font-family: Arial, sans-serif; padding: 8px; border: 1px solid #eee; border-radius: 10px; background-color: #fff;">
      <h2>Olá, ${nome}!</h2>
      <p>Recebemos seu pedido <strong>#${orderId}</strong> com sucesso.</p>

      <h3 style="color: #2c3e50;">Detalhes do Pedido:</h3>
      <ul>${htmlItems}</ul>

      <p><strong>Total a pagar:</strong> ${total} Kz</p>

      <hr style="margin: 20px 0;" />

      <p>Você pode acompanhar o estado do seu pedido no aplicativo da Fast-Pizza. Entraremos em contacto assim que estiver a caminho! 🚚</p>
      <p>Se tiver dúvidas, entre em contacto conosco por e-mail ou ligue para 922520825 | 923617845.</p>

      <p style="margin-top: 30px; font-size: 14px; color: #999;">Obrigado por escolher a Fast-Pizza! 🍕</p>
    </div>
  `,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendOrderEmail };

// seedTiposPagamento.js
const { TipoPagamento } = require("./models");
(async () => {
  await TipoPagamento.bulkCreate([
    { nome: "cash" },
    { nome: "transferencia" },
    { nome: "express" },
  ], { ignoreDuplicates: true });
  console.log("Tipos de pagamento inseridos");
  process.exit();
})();

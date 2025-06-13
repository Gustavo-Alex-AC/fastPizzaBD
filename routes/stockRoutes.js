const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stockController");

router.put("/pizzas/:id/stock", stockController.updateStock);


module.exports = router;

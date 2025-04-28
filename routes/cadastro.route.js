const express = require("express");
const router = express.Router();

router.post('/cadastro', ()=>{console.log("Rota de cadastro")});

module.exports = router;
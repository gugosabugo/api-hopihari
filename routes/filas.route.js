const express = require("express");
const router = express.Router();
const login = require("../middleware/usuarios.middleware")

router.post('/', ()=>{console.log("Filas route")});

module.exports = router;
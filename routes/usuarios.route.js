const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");

router.post('/login', ()=>{console.log("Rota de login")});
router.put('/:id', usuariosController.atualizarUsuario);
router.post('/', usuariosController.cadastrarUsuario);

module.exports = router;
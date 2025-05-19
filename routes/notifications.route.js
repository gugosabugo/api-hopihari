const express = require("express");
const router = express.Router();
const login = require("../middleware/usuarios.middleware");
const notificationsController = require("../controllers/notifications.controller");

router.get('/',
    login.required,
    notificationsController.getNotificacoes 
)

module.exports = router;
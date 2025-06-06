const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const usuariosRoute = require("./routes/usuarios.route");
const notificationsRoute = require("./routes/notifications.route")
const filasRoute = require("./routes/filas.route");
const brinquedosRoute = require("./routes/brinquedos.route");

app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        "Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE";
    };
    next();
});

app.use("/usuarios", usuariosRoute);
app.use("/filas", filasRoute);
app.use("/notifications", notificationsRoute);
app.use("/brinquedos", brinquedosRoute);

module.exports = app;
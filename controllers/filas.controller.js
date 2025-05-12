const mysql = require("../mysql")

exports.entraFila = async (req, res, next) => {
    try {
        const resultados = await mysql.execute(
            `INSERT INTO hopi_hari_db.lines (id_user, id_rides) VALUES(?, ?)`,
            [res.locals.idUsuario, req.params.idRide]
        );
        return res.status(201).send({"mensagem": resultados});
    } catch (error) {
        return res.status(500).send(error)
    }
}
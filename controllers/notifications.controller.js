const mysql = require("../mysql")

exports.getNotificacoes = async (req, res, next) => {
    try {
        const resultado = await mysql.execute(
            `SELECT * FROM notifications
                     WHERE id_user = 8
                       AND status = TRUE;`,
            [res.locals.idUsuario]
        )
        res.status(201).send({
            "Resultado": resultado
        })
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.updateNotificacoes = async (req, res, next) => {
    try {
        const resultado = await mysql.execute(
            `UPDATE notifications
    		    SET status = 0
		      WHERE id = ?;`,
            [req.params.idNot]
        )
        res.status(201).send({
            "Resultado": resultado
        })
    } catch (error) {
        return res.status(500).send(error)
    }
}
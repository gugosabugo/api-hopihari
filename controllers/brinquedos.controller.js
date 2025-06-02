const mysql = require("../mysql")

exports.cadastrarBrinquedo = async (req, res) => {
    try {
        const resultados = await mysql.execute(
            `INSERT INTO rides (name, waiting_time, status, area)
             VALUES(?, ?, ?, ?)`,
            [
                req.body.name,
                req.body.waiting_time,
                req.body.status,
                req.body.area
            ]
        )
        return res.status(201).send({
            "Mensagem": "Brinquedo cadastrado com sucesso",
            "Resultados": resultados
        })
    } catch (error) {
        return res.status(500).send(error);
    }
}

exports.getBrinquedosByAreaName = async (req, res) => {
    try {
        resultados = await mysql.execute(
            `SELECT * FROM rides WHERE id_areas = (SELECT id FROM areas WHERE name = ?);`,
            [req.params.areaName]
        )
        if (resultados.length === 0) {
            return res.status(404).send({
                "Mensagem": "Área do parque não encontrada"
            })
        }else{
            res.status(200).send({
                "Mensagem ": "Consulta realizada com sucesso",
                "Resultados": resultados
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
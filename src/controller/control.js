import { consultAll, consultById, insertData } from "../module/connection/service.js"


const TABLE = "pessoas"

let controlInicio = async function (req, res) {

    let consulta = await consultAll(TABLE)
    // console.log(consulta)

    res.send(consulta)
}

let controlGetById = async function (req, res) {

    let id = [req.params.id]
    let consulta = await consultById(TABLE, id)

    res.send(consulta)
}

let controlInsert = async function (req, res) {

    let { name, email, data_nasc } = req.body
    let data = [name, email, data_nasc]
    const COLS = 'nome_pessoa , email_pessoa , nasc_pessoa'

    let insert = await insertData(TABLE, COLS, data)

    if (insert.insertId) {
        let id = [insert.insertId]
        let consulta = await consultById(TABLE, id)
        res.send(consulta)
    }




}





export { controlInicio, controlGetById, controlInsert }
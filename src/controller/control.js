import { consultAll, consultById, insertData, deleteById } from "../module/connection/service.js"


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
    let data = [name, email, data_nasc, new Date]
    const COLS = 'nome_pessoa , email_pessoa , nasc_pessoa , ued_pessoa'

    let insert = await insertData(TABLE, COLS, data)

    if (insert.insertId) {
        let id = [insert.insertId]
        let consulta = await consultById(TABLE, id)
        res.send(consulta)
    }
}

let controlDeleteById = async function (req, res) {

    let id = [req.params.id]
    let consulta = await deleteById(TABLE, id)
    if (consulta.affectedRows > 0) {
        res.send(`Item ${id} deleted`)

    }


}




export { controlInicio, controlGetById, controlInsert, controlDeleteById }
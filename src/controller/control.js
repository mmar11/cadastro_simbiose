import { consultAll, consultById, insertData, deleteById, updateByID } from "../module/connection/service.js"


const TABLE = "pessoas"

let controlIndex = function (req, res) {
    res.render('./index.ejs')
}

let controlInicio = async function (req, res) {

    let consulta = await consultAll(TABLE)
    res.render('pessoas.ejs', { consulta: consulta })
}

let controlGetById = async function (req, res) {

    let id = [req.params.id]
    let consulta = await consultById(TABLE, id)
    res.render('pessoaid.ejs', { consulta: consulta })
}


let controlBuscarPessoa = async function (req, res) {

    let id = req.query.id
    // let consulta = await consultById(TABLE, id)
    // console.log(consulta)
    res.redirect(`/pessoa/${id}`)
}



let controlFormInsert = async function (req, res) {

    res.render('include.ejs')
}

let controlInsert = async function (req, res) {

    let { nome, email, datanasc } = req.body
    let data = [nome, email, datanasc, new Date]
    const COLS = 'nome_pessoa , email_pessoa , nasc_pessoa , ued_pessoa'

    let insert = await insertData(TABLE, COLS, data)

    if (insert.insertId) {
        let id = [insert.insertId]
        let consulta = await consultById(TABLE, id)
        res.render('dataincluded.ejs', { consulta: consulta })
    }
    else {
        res.redirect('/')
    }
}




let controlDeleteById = async function (req, res) {

    let id = [req.params.id]
    let consulta = await deleteById(TABLE, id)
    if (consulta.affectedRows > 0) {
        res.send(consulta)
    }

}

let controlUpdate = async function (req, res, next) {

    let id = [req.params.id]
    let consulta = await consultById(TABLE, id)
    res.render('update.ejs', { consulta })
    // res.send(consulta)

}

let controlUpdateById = async function (req, res) {

    let id = req.params.id
    let { novoNome, novoEmail, novaDataNasc } = req.body
    let param = [novoNome, novoEmail, novaDataNasc, new Date, id]

    let insert = await updateByID(TABLE, param)

    if (insert.affectedRows) {
        let consulta = await consultById(TABLE, [id])
        res.send(consulta)
    }
}





export { controlInicio, controlGetById, controlInsert, controlDeleteById, controlUpdateById, controlIndex, controlBuscarPessoa, controlFormInsert, controlUpdate }
import { conexao } from "./connection.js"

let valinsert = (param) => {
    let val = "? "
    for (let i = 0; i < (param.length - 1); i++) {
        val += ", ? "
    }
    return val
}

async function insertData(table, colinsert, param) {

    let insert = await conexao(`INSERT INTO ${table} (${colinsert}) VALUES(${valinsert(param)})`, param);
    return insert
}

async function consultAll(table) {

    let query = await conexao(`SELECT * FROM ${table}`)
    return query
}

async function consultById(table, id) {
    let query = await conexao(`SELECT * FROM ${table} WHERE id_pessoas = ? `, id);
    return query
}

async function deleteById(table, id) {

    let query = await conexao(`DELETE FROM ${table} WHERE id_pessoas = ? `, id);
    return query
}

async function updateByID(table, param) {

    let insert = await conexao(`UPDATE ${table} SET nome_pessoa = ? , email_pessoa = ? , nasc_pessoa = ? , ued_pessoa = ?   WHERE id_pessoas = ?`, param);
    return insert
}


export { insertData, consultAll, consultById, deleteById, updateByID }
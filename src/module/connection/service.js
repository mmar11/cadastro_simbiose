import conexao from "./connection.js"


//SELEC / .selectall - Define the table you wish to access - string
let table = ""

//SELECT / .selectcolDefine - the column you wish to SELECT - string
let column = ''

//INSERT / .insert - Define the params to INSERT - array of strings
let param = [];

//INSERT / .insert - Define a string with the column fields of the table, separate by ( , ) - string
let colinsert = ""




let valinsert = () => {
    let val = "? "
    for (let i = 0; i < (param.length - 1); i++) {
        val += ", ? "
    }
    return val
}


let query = {
    selectall: `SELECT * FROM ${table}`,
    selectcol: `SELECT * FROM ${table} WHERE ${column} = ? `,
    insert: `INSERT INTO ${table} (${colinsert}) VALUES(${valinsert()})`
}

//Define the query.
conexao(query, param);
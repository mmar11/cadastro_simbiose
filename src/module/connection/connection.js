
import mysql from 'mysql2';
import * as dotenv from 'dotenv'
dotenv.config()

// create the connection to database
const connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});



function conexao(sqlquery, place) {
    connection.execute(sqlquery,
        place,
        function (err, results, fields) {
            if (results) {
                console.log(results);
                console.log(fields);
            }
            else { err }
        }
    );
}

export default conexao 
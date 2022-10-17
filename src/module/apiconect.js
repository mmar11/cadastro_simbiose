import fetch from 'node-fetch';

const body = { a: 1 };

export async function makeMethodPut(id) {

    const response = await fetch(`http://localhost:3000/pessoaed/${id}`, {
        method: 'get'
        // body: JSON.stringify(body),
        // headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
        .then(data => {

            console.log(data);
        });
}
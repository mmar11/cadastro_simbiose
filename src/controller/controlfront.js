import fetch from 'node-fetch'

let controlFrontUpdate = async function (req, res) {

    let id = req.params.id
    let body = req.body

    const response = await fetch(`http://localhost:3000/pessoa/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }).then((response) => response.json())
        .then((data) => {
            let consulta = data
            console.log(consulta)
            res.render('usrupdated.ejs')
        })




}

export { controlFrontUpdate }
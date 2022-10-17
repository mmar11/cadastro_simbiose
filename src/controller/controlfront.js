import fetch from 'node-fetch'

let controlFrontUpdate = async function (req, res) {

    let id = req.params.id
    let body = req.body
    const response = await fetch(`https://cadastrosimbiose.herokuapp.com/pessoa/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }).then((response) => response.json())
        .then((data) => {
            let consulta = data
            res.render('usrupdated.ejs')
        })

}

let controlFrontDelete = async function (req, res) {

    let id = req.params.id
    const response = await fetch(`https://cadastrosimbiose.herokuapp.com/pessoa/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }

    }).then((response) => response.json())
        .then((data) => {
            res.render('usrdeleted.ejs')
        })

}

export { controlFrontUpdate, controlFrontDelete }
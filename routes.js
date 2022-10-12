import { Router } from "express"
const routes = Router()



routes.get('/', function (req, res) {
    res.send('tela inicial')
})

routes.post('/pessoa', function (req, res) {
    res.send('inclui pessoa')
})

routes.get('/pessoa/:id', function (req, res) {
    res.send('consulta p id')
})

routes.put('/pessoa/:id', function (req, res) {
    res.send('altera p id')
})

routes.delete('/pessoa/:id', function (req, res) {
    res.send('deleta p Id')
})

routes.get('/pessoas', function (req, res) {
    res.send('consulta pessoas cadastradas')
})


export default routes
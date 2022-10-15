import { Router } from "express"
const routes = Router()
import { controlInicio, controlGetById, controlInsert } from "./src/controller/control.js"



routes.get('/', function (req, res) {
    res.send('Tela de inicio')
})

routes.get('/pessoas', controlInicio)


routes.post('/pessoa', controlInsert)


routes.get('/pessoa/:id', controlGetById)

routes.put('/pessoa/:id', function (req, res) {
    res.send('altera p id')
})

routes.delete('/pessoa/:id', function (req, res) {
    res.send('deleta p Id')
})




export default routes
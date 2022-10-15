import { Router } from "express"
const routes = Router()
import { controlInicio, controlGetById, controlInsert, controlDeleteById, controlUpdateById } from "./src/controller/control.js"



routes.get('/', function (req, res) {
    res.send('Tela de inicio')
})

routes.get('/pessoas', controlInicio)

routes.post('/pessoa', controlInsert)

routes.get('/pessoa/:id', controlGetById)

routes.put('/pessoa/:id', controlUpdateById)

routes.delete('/pessoa/:id', controlDeleteById)




export default routes
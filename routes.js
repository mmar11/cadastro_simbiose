import { Router } from "express"
const routes = Router()
import { controlInicio, controlGetById, controlInsert, controlDeleteById, controlUpdateById, controlIndex, controlBuscarPessoa } from "./src/controller/control.js"
import multer from 'multer'
const upload = multer({ dest: 'uploads/' })


routes.get('/', controlIndex)

routes.get('/pessoas', controlInicio)

routes.post('/pessoa', controlInsert)

routes.get('/pessoa/:id', upload.none(), controlGetById)

routes.get('/buscarpessoa', controlBuscarPessoa)

routes.put('/pessoa/:id', controlUpdateById)

routes.delete('/pessoa/:id', controlDeleteById)




export default routes
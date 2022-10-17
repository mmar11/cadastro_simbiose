import { Router } from "express"
const routes = Router()
import * as c from "./src/controller/control.js"
import * as cfront from "./src/controller/controlfront.js"
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })


routes.get('/', c.controlIndex)

routes.get('/pessoas', c.controlInicio)

routes.get('/pessoa', c.controlFormInsert)

routes.post('/pessoa', upload.none(), c.controlInsert)

routes.get('/pessoa/:id', upload.none(), c.controlGetById)

routes.get('/buscarpessoa', c.controlBuscarPessoa)

routes.get('/pessoaed/:id', c.controlUpdate)
routes.post('/pessoaed/:id', upload.none(), cfront.controlFrontUpdate)


routes.put('/pessoa/:id', c.controlUpdateById)

routes.delete('/pessoa/:id', c.controlDeleteById)




export default routes
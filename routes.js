import { Router } from "express"
const routes = Router()
import * as c from "./src/controller/control.js"
import * as cfront from "./src/controller/controlfront.js"
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })


//rotas solicitadas
routes.get('/', c.controlIndex)

routes.post('/pessoa', upload.none(), c.controlInsert)

routes.get('/pessoa/:id', upload.none(), c.controlGetById)

routes.put('/pessoa/:id', c.controlUpdateById)

routes.delete('/pessoa/:id', c.controlDeleteById)

routes.get('/pessoas', c.controlInicio)


//rotas auxiliares
routes.get('/pessoa', c.controlFormInsert)
routes.get('/buscarpessoa', c.controlBuscarPessoa)
routes.get('/pessoaed/:id', c.controlUpdate)
routes.post('/pessoaed/:id', upload.none(), cfront.controlFrontUpdate)
routes.get('/pessoaex/:id', cfront.controlFrontDelete)



export default routes
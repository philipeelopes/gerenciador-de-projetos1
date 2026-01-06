import jsonServer from 'json-server'
import path from 'path'
import { fileURLToPath } from 'url'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 5000

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(router)

server.listen(PORT, () => {
  console.log('JSON Server rodando na porta', PORT)
})

//https://github.com/philipeelopes/gerenciador-backend
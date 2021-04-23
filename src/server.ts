import express from 'express'
import {createServer} from 'http'
import path from 'path'
import {Server, Socket} from 'socket.io'


import './database'
import {routes} from './routes'

const app = express()

app.use(express.static(path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/pages/client',(req, res)=>{
    return res.render('html/client.html')
})

const http = createServer(app)
const io = new Server(http)

io.on("connection", (socket:Socket)=>{
    console.log('Se conectou', socket.id)
})
const port = 3333

app.use(express.json())
app.use(routes)

// /*const host = '0.0.0.0'; //docker*/
// const name = "Bruno"

// app.get("/",(req, res)=> {
//     return res.json({
//         mensagem:`Bem vindo ${name}`
//     })
// });


app.listen(port,()=> console.log(`Server is running on port ${port}`))


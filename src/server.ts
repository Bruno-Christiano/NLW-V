import express from 'express'


import './database'
import {routes} from './routes'

const app = express()
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


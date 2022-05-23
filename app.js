const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

const port = 3000

//middleware
app.use(express.json())

//rotas
app.get('/', (req,res)=>{
    res.end('Bem vindo a HOME!!!')
})

app.use('/api/v1/tasks',tasks)




//app.get
//app.post
//app.patch
//app.delete

app.listen(port,console.log(`Servidor em execução, escutando na porta ${port}`))
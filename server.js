const exp = require('express')
const http = require('http')
const path = require('path')
const {Server} = require('socket.io')

const app = exp()
const server = http.createServer(app)
app.use(exp.static(path.resolve('./public')));


server.listen(3000 , ()=>{
    console.log("Server is listening...")
})

app.get("/" ,(req , res)=>{
    res.sendFile('index.html')
})
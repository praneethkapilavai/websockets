const exp = require('express')
const http = require('http')
const path = require('path')
const {Server} = require('socket.io')

const app = exp()
const server = http.createServer(app)
const io = new Server(server)

app.use(exp.static(path.resolve('./public')));


server.listen(3000 , ()=>{
    console.log("Server is listening...")
})


io.on('connection' , (socket)=>{
    console.log('a user connected')
    socket.on("msgfromF" , (msg)=>{
        console.log(msg)
        socket.emit("msgfromB", msg)
    })
})

app.get("/" ,(req , res)=>{
    res.sendFile('index.html')
})
import { WebSocket } from "ws";

const ws=new WebSocket({port: 3000})



//evnet handler

ws.on('connection',(socket)=>{
    console.log('connected')
    console.log(socket)
})
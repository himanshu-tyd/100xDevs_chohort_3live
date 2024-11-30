import { useState } from "react"


export const useSocket=()=>{

    const [message , setMessage]=useState<{message:string}>({
        message:''
    })


    const socketFun=()=>{
            const ws=new WebSocket("ws://localhost:8000")

            ws.onopen=()=>{
                console.log('CONNECTION CREATE')
                console.log('HELLO SERVER')
                ws.send(JSON.stringify({
                    type:"join",
                    payload:{
                        roomId:"red"
                    }
                }))

            }

            ws.onmessage=(message)=>{
                console.log('message recived')
                console.log(message.data)
            }

            return ws
        }
    

    return {socketFun, message}
}
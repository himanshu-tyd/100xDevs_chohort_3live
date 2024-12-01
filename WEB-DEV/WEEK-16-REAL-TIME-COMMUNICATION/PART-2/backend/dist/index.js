"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
// @ts-ignore
const wss = new ws_1.WebSocketServer({ port: 8000 });
let useCount = 0;
let allSocketUsers = [];
wss.on("connection", (socket) => {
    console.log("user connected", useCount++);
    socket.on("message", (message) => {
        //@ts-ignore
        const parseMessage = JSON.parse(message);
        if (parseMessage.type == "join") {
            allSocketUsers.push({
                socket,
                room: parseMessage.payload.roomId,
            });
        }
        if (parseMessage.type == "chat") {
            let currentUser = null;
            for (let i = 0; i < allSocketUsers.length; i++) {
                if (allSocketUsers[i].socket == socket) {
                    currentUser = allSocketUsers[i].room;
                }
            }
            for (let i = 0; i < allSocketUsers.length; i++) {
                if (allSocketUsers[i].room == currentUser) {
                    allSocketUsers[i].socket.send(parseMessage.payload.message);
                }
            }
        }
    });
});

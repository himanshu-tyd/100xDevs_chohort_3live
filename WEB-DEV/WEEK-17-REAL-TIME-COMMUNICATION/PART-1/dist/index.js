"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const ws = new ws_1.WebSocket({ port: 8000 });
//evnet handler
ws.on('connection', (socket) => {
    console.log('connected');
    console.log(socket);
});

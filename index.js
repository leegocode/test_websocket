const express = require('express');
const WebSocket = require('ws');
const SocketServer = require ('ws').Server;

const server = express().listen(3000);
const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
    console.log('server: a client is connected');
    ws.on('close',() => console.log('server: a client disconnected'))
    ws.on('message', (message) => {
        console.log('server: receive message: es', message);
        wss.clients.forEach(function each(client){
            if(client !== ws && client.readyState === WebSocket.OPEN)
            client.send(message)
        })
    })
});
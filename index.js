const express = require('express');
const WebSocket = require('ws');
const SocketServer = require ('ws').Server;

const server = express().listen(3000);
const wss = new SocketServer({ server });
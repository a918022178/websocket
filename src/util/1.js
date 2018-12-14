// const WebSocketServer = require('ws').Server
//   , wss = new WebSocketServer('129.204.70.149:8080')

// console.log(wss)
// wss.on('connection', (ws) => {
//     console.log('connected.')
//     ws.on('message', (message) => {
//         wss.clients.forEach((client) => {
//             client.send(message)
//         })
//     })
//     wss.clients.forEach((client) => {
//         client.send('keyword:')
//     })
// })
var express = require('express');
var http = require('http');
var WebSocket = require('ws');

var app = express();
app.use(express.static(__dirname));

var server = http.createServer(app);
var wss = new WebSocket.Server({server});

wss.on('connection', function connection(ws) {
    console.log('链接成功！');
    ws.on('message', function incoming(data) {
        console.log(data);
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    });
});

server.listen(8888, function listening() {
    console.log('服务器启动成功！');
});

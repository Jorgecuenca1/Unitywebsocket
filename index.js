const WebSock = require('ws');
const wss = new WebSock.Server({ port: 8080 },()=>{
    console.log('Server started...')
})

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        console.log('received: %o'+data.toString());

        // Enviar el mensaje a todos los clientes conectados
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSock.OPEN) {
                client.send(data.toString());
            }
        });

        ws.send('Hola desde el server'); // Esto enviará el mensaje de vuelta solo al emisor
    })
})

wss.on('listening',()=>{
    console.log('Server is listening on port 8080!')
})

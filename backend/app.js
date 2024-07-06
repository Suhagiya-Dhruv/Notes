const app = require('express')();
const cors = require('cors');
const WebSocket = require('ws');

let wss;
function connection() {
    console.log("client Conneted");
}


function updateClient() {

    wss.clients.forEach(client => {
        client.send("data changed")
    })

}

app.use(cors());

const data = []

app.get('/', function (req, res) {
    res.send(data);
})
app.post('/', function (req, res) {
    data.push(Math.random());
    updateClient();
    res.send("user created");
})

const server = app.listen(5555, () => {
    console.log('Server started on port 5555');
})

wss = new WebSocket.Server({ server });
// wss = new WebSocket.Server({ port: 8080 });


wss.on('connection', connection)


const express = require("express");
const WebSocket = require("ws");
const app = express();

const server = app.listen(5000);
const wss = new WebSocket.Server({ server });

let orderBook = { bids: [], asks: [] };

wss.on("connection", ws => {
    ws.send(JSON.stringify(orderBook));

    ws.on("message", message => {
        const order = JSON.parse(message);

        if(order.type === "buy")
            orderBook.bids.push(order);
        else
            orderBook.asks.push(order);

        broadcast();
    });
});

function broadcast() {
    wss.clients.forEach(client =>
        client.send(JSON.stringify(orderBook))
    );
}
const express = require("express");
const app = express();
const twofaRoutes = require("./routes/twofa");

app.use(express.json());
app.use("/api/2fa", twofaRoutes);

app.listen(5000, () => {
  console.log("Bit-City backend running");
});

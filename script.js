new TradingView.widget({
  symbol: "BINANCE:BTCUSDT",
  container_id: "chart",
  width: "100%",
  height: 500,
  theme: "dark"
});

const socket = new WebSocket("ws://localhost:5000");

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);

  document.getElementById("bids").innerHTML =
      data.bids.map(o => `<p>${o.price}</p>`).join("");

  document.getElementById("asks").innerHTML =
      data.asks.map(o => `<p>${o.price}</p>`).join("");
};

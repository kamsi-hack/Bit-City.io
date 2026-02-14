const { MongoClient } = require("mongodb");

async function run() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const db = client.db("bitcity");
  await db.collection("logs").insertOne({ message: "System started" });
}
run();

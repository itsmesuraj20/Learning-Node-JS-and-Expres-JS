const mongoose = require("mongoose");

async function connectMongoDb(url) {
  //Connecting Moongoose
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB Connect"))
    .catch((err) => console.log("Mongo Error", err));
}

module.exports = {
    connectMongoDb,
}
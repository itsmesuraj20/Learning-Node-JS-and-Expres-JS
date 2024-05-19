//HOME WORK TO USE PATCH AND DELETE USING POSTMAN



const express = require("express");
// const users = require("./MOCK_DATA.json");


//MongoDB Coonection 
const {connectMongoDb} = require('./connections')
connectMongoDb("mongodb://127.0.0.1:27017/first-db")

const fs = require("fs");
const userRouter = require("./routes/user");

//MiddleWare Connection Route
const logReqRes = require("./middlewares");


const app = express();
const PORT = 8000;

//Using MiddleWare
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use(logReqRes("log.txt"));


//Routes 
app.use('/user' , userRouter);


app.listen(PORT, () => {
  console.log("Server started at ", PORT);
});

//Built in Package used to create a server
const http = require("http");
const fs = require("fs");

// const myServer = http.createServer((req,res) =>{
//     console.log("New Request Received .");
//     res.end("Server is working "); //this will be response of the particular request
// });

const myServer = http.createServer((req,res) =>{
    const log = `New Req Received at : ${Date.now()} \n`;
    fs.appendFile("log.txt" , log,(err,data) =>{
        res.end("Server is working !");
    });
    // console.log(req); // also we can log(req.headers);
    // res.end("Server is working !"); //this will be response of the particular request
});


myServer.listen(8000 , () =>{
    console.log("Server started");
});


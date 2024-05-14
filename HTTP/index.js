//Built in Package used to create a server
const http = require("http");
const fs = require("fs");
const url = require("url")

// const myServer = http.createServer((req,res) =>{
//     console.log("New Request Received .");
//     res.end("Server is working "); //this will be response of the particular request
// });

const myServer = http.createServer((req,res) =>{
    if(req.url === "/favicon.ico") return req.end;

    const log = `New Req Received at : ${Date.now()} in ${req.url} \n`;
    const myUrl = url.parse(req.url ,true);
    
    console.log(myUrl);
    fs.appendFile("log.txt" , log,(err,data) =>{
        switch(myUrl.pathname){
            case '/': res.end("Home Page Server working OKK !");
            break;

            case '/about': 
            const username = myUrl.query.myname;
            res.end("About Page Server Working OKKK", `${username}`);
            break;

            default : res.end("404 ERROR");
        }
       
    });
    // console.log(req); // also we can log(req.headers);
    // res.end("Server is working !"); //this will be response of the particular request
});


myServer.listen(8000 , () =>{
    console.log("Server started");
});


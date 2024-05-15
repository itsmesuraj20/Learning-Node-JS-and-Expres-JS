const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.end("Hello World from HomePAGE");
})

app.get('/about',(req,res)=>{
    res.end("Hello World from AboutPage");
})

app.get('/search',(req,res) =>{
    res.end(`Hey ${req.query.name} , you are ${req.query.age}`);
})



// function myHandler(req,res){
//     if(req.url === "/favicon.ico") return res.end("");

//     const log = `New Req Received at : ${Date.now()} in ${req.url} \n`;
//     const myUrl = url.parse(req.url ,true);
    
//     // console.log(myUrl);
//     fs.appendFile("log.txt" , log,(err,data) =>{
//         switch(myUrl.pathname){
//             case '/': 
//             if(req.method === 'GET')
//             res.end("Home Page Server working OKK !");
//             break;

//             case '/about': 
//             const username = myUrl.query.myname;
//             // res.end("About Page Server Working OKKK", `${username}`);
//             res.end("Hi" + username);
//             break;


//             case "search":
//                 const search = myUrl.query.search_query;
//                 res.end("Here is the result of the search" + search);
//                 break;


//             case "/signup":
//                 if(req.method === "GET") res.end("This is a signup form");
//                 else if ( req.method === "POST"){
//                     res.end("Success");
//                 }
//             break;


//             default : res.end("404 ERROR");
//         }
       
//     });
//     // console.log(req); // also we can log(req.headers);
//     // res.end("Server is working !"); //this will be response of the particular request
// }



//Instead of doing this 
// const myServer = http.createServer(app);
// const PortNum = 8081;
// myServer.listen(PortNum,() =>{
//     console.log("Server started Port Number " , PortNum);
// })

//we can use Express function 
const PortNum = 8081;
app.listen(PortNum , ()=>{
    console.log("Your server has been started at Port Number" , PortNum);
})
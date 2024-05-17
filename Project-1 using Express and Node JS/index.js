//HOME WORK TO USE PATCH AND DELETE USING POSTMAN

const express = require("express");
const users = require("./MOCK_DATA.json");

const fs = require("fs");


const app = express();
const  PORT = 8000;



//Using MiddleWare

app.use(express.urlencoded({extended : false}));

app.get('/users',(req,res) =>{
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.gender}</li>` ).join("")}
    </ul>
    `
    return res.send(html);
});

app.get('/api/users',(req,res) =>{ // It is a good practice that u should use /api/user to API purposes
    return res.json(users);
}); 

app.get('/api/users/:id' , (req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id ===id);
    return res.json(user);
});


app.post('/api/users/',(req,res)=>{
    const body = req.body;
    users.push({...body ,id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users),(err,data) =>{
        res.json({status :"success" , id: users.length});
    });
});

// app.
//     get('/api/users/:id',(req,res) =>{
//         res.json(users);
//     })
//     .post('/api/users/:id',(req,res) =>{
//         res.json({status : "pending"});
//     })
   

// app.post("api/users",(req,res) =>{
//     return res.json({status : "pending"});
// });


app.listen(PORT,() =>{
    console.log("Server started at ", PORT);
})
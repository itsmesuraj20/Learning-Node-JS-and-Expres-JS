const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const  PORT = 8000;

app.get('/users',(req,res) =>{
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.gender}</li>` ).join("")}
    </ul>
    `
    return res.send(html);
});

// app.get('/api/users',(req,res) =>{ // It is a good practice that u should use /api/user to API purposes
//     return res.json(users);
// }); 

app.
    get('/api/users/:id',(req,res) =>{
        res.json(users);
    })
    .post('/api/users/:id',(req,res) =>{
        res.json({status : "pending"});
    })
   

// app.get('/api/users/:id' , (req,res) =>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id ===id);
//     return res.json(user);
// });

// app.post("api/users",(req,res) =>{
//     return res.json({status : "pending"});
// });


app.listen(PORT,() =>{
    console.log("Server started at ", PORT);
})
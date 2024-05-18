//HOME WORK TO USE PATCH AND DELETE USING POSTMAN

const express = require("express");
const users = require("./MOCK_DATA.json");

const fs = require("fs");

const app = express();
const PORT = 8000;

//Using MiddleWare
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

// app.use((req, res, next) => {
//   return res.json("Hello World MiddleWare 1");
//   next();
// });

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.gender}</li>`).join("")}
    </ul>
    `;
  return res.send(html);
});

app.get("/api/users", (req, res) => {
  // It is a good practice that u should use /api/user to API purposes
  return res.json(users);
});

app
  // .route("/api/users/:id")
  .get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if(!user) return res.status(404).json({error : 'user not found'});
  return res.json(user);
});

app.post("/api/users/", (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are req..." });
  }
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "success", id: users.length });
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

app.listen(PORT, () => {
  console.log("Server started at ", PORT);
});


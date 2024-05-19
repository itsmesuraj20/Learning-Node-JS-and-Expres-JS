//HOME WORK TO USE PATCH AND DELETE USING POSTMAN

const express = require("express");
// const users = require("./MOCK_DATA.json");

const fs = require("fs");
const mongoose = require("mongoose");


//Connecting Moongoose
mongoose.connect('mongodb://127.0.0.1:27017/first-db').then(() => console.log("MongoDB Connect")).catch((err) => console.log("Mongo Error", err));


//Schema
const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required : true,
  },
  lastName:{
    type: String,
  },
  email : {
    type: String,
    required : true,
    unique: true,
  },
  gender : {
    type: String,
  },
  job_title :{
    type: String,
  }
},{ timestamps: true })

//Model
const User = mongoose.model('user', userSchema)

const app = express();
const PORT = 8000;

//Using MiddleWare
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

// app.use((req, res, next) => {
//   return res.json("Hello World MiddleWare 1");
//   next();
// });

app.get("/users", async (req, res) => {
  const allDBUsers = await User.find({})
  const html = `
    <ul>
    ${allDBUsers.map((user) => `<li>${user.firstName}-${user.email}</li>`).join("")}
    </ul>
    `;
  return res.send(html);
});

// app.get("/api/users", (req, res) => {
//   // It is a good practice that u should use /api/user to API purposes
//   return res.json(users);
// });

app
  // .route("/api/users/:id")
  .get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if(!user) return res.status(404).json({error : 'user not found'});
  return res.json(user);
});

app.post("/api/users/", async (req, res) => {
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
  const result =  await User.create({
    firstName : body.first_name,
    lastName : body.last_name,
    email :  body.email,
    gender : body.gender,
    job_title : body.job_title,
  }); 

  console.log("Result" ,result);

  return res.status(201).json({msg: "Success"})



  //In MongoDB we dont to need to push by this method 
  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   return res.status(201).json({ status: "success", id: users.length });
  // });
});


//RestAPI
app.get("/api/users" , async (req,res) =>{
  const allDBUsers = await User.find({})

  res.setHeader("X-MyName" , "Piyush Garg"); //Custom Header
  //Always add X to custom headers
  return res.json(allDBUsers);

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


const express = require("express")

const router = express.Router();

// router.use((req, res, next) => {
//   return res.json("Hello World MiddleWare 1");
//   next();
// });

router.get("/", async (req, res) => {
    const allDBUsers = await User.find({})
    // const html = `
    //   <ul>
    //   ${allDBUsers.map((user) => `<li>${user.firstName}-${user.email}</li>`).join("")}
    //   </ul>
    //   `;
    // return res.send(html);
    return res.json(allDBUsers);
  });
  
  // router.get("/", (req, res) => {
  //   // It is a good practice that u should use /api/user to API purposes
  //   return res.json(users);
  // });
  
  router
    .route("/:id")
    .get( async (req, res) => {
      const user = await User.findById(req.params.id);
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({error : 'user not found'});
    return res.json(user);
  })
    .patch( async (req,res)=>{
      await User.findByIdAndUpdate(req.params.id ,{lastName: "Changed"});//Change is hardcoded in this 
      return res.json({status : "Sucess"});
  
    })
    .delete(async (req,res) =>{
      await User.findByIdAndDelete(req.params.id);
      return res.json({status : "Success"});
    })
  
  router.post("/", async (req, res) => {
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
  router.get("/" , async (req,res) =>{
    const allDBUsers = await User.find({})
  
    // res.setHeader("X-MyName" , "Piyush Garg"); //Custom Header
    //Always add X to custom headers
    return res.json(allDBUsers);
  
  });
  
  
  
  
  // router.
  //     get('//:id',(req,res) =>{
  //         res.json(users);
  //     })
  //     .post('//:id',(req,res) =>{
  //         res.json({status : "pending"});
  //     })
  
  // router.post("",(req,res) =>{
  //     return res.json({status : "pending"});
  // });


  module.exports = router
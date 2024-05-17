const express = require("express")

const app = express();
const PORT = 9000

//MiddleWare - Plugin 
app.use(express.urlencoded({extended : false}));

app.use((req,res,next) =>{
    console.log('Hello From M!' );
})

app.get('/',(req,res)=>{
    res.send("Server Started");
})

app.listen(PORT,()=>{
    console.log("Server started on PORT" , PORT);
})
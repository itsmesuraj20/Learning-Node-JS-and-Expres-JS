// const fs = require("fs");

// //Syncronous
// fs.writeFileSync("./text.txt","hello World");

// //Asyncornous  ..
// fs.writeFile("./texts.txt" ,"HelloWOrld Disl" , (err)=>{})

//File Reading(Sync)
// const result = fs.readFileSync("./text.txt" ,"utf-8");
// console.log(result);


//File Reading(Async) 
// const res = fs.readFile("./text.txt" ,"utf-8",(err,result) =>{
//     if(err){
//         console.log("err", err);
//     }
//     else{
//         console.log(result)
//     }
// } )



//Appendfile function that appened the value in an existing file


// fs.appendFileSync("./text.txt" , new Data().getData().toLocaleString());
const fs = require("fs"); 
// fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString());

//operating System module which tell the number of CPU in your system or server
// const os = require("os");
// console.log(os.cpus().length);



//Non -Blocking operation 

// console.log("1");
// console.log("2");
// fs.readFile("./text.txt","utf-8",(err,res)=>{
//     if(err){
//         console.log("Error is ",err);
//     }
//     else{
//         console.log(res);
//     }
// })
// console.log("3");
// console.log("4");


//Blocking Operation
console.log("1");
const  res = fs.readFileSync("./texts.txt","utf-8");
console.log(res);

console.log("2");
console.log("3");
console.log("4")
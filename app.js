const express=require('express');
const path=require('node:path');
const app=express();
console.log("hii");

app.set("views",path.join(__dirname,"Views"));
app.set("view engine","ejs");
let message=[
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }];

app.listen(3000,()=>console.log("started..."));
app.get('/',(req,res)=>{
    res.render("index",{ title: "Message Board",messages:message});
});

const express=require('express');
const path=require('node:path');
const app=express();
app.use(express.urlencoded({ extended: true }));
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
app.get('/new',(req,res)=>res.render('form'));
app.post('/new',(req,res)=>{
    message[message.length]={user:req.body.user,text:req.body.text,added:new Date()};
    res.render('index',{title:"Updated Message Board",messages:message})
});
app.get('/:index',(req,res)=>{
    console.log(req.params);
    res.render('detail',{message:message[req.params.index]})
});

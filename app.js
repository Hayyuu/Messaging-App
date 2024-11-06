const express=require('express');
const fs=require('fs');
const app=express();
let d;
fs.readFile('index.html','utf8',(error,data)=>{
    if(error){
        console.log(error);
        return;
    }
    else{
        d=data;
    }
});
app.listen(3000,()=>console.log("started..."));
app.get('/',(req,res)=>{
    res.send(d)
});

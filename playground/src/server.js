const express=require('express');

const app=express();

//middleware
app.use((req, res, next) => {
  console.log(` ${req.method} ${req.url}`);
  next(); // pass control to next middleware/route
});
//route to home
app.get('/home',(req,res)=>{
    res.json({anydata:"Hello home",time:new Date()})
})

//middleware
app.use((req,res,next)=>{
    next();
})

app.get('/math/add',(req,res)=>{
    const {a,b}=req.query;
    const na=Number(a);
    const nb=Number(b);
    sum=na+nb
    res.json(`sum is ${sum}`)
})


//route to displaye user name
app.get('/user/:name',(req,res)=>{
    const nam=req.params.name;
    res.send(`hello ${nam}`)
})


app.use((req,res,next)=>{
    next();
})

port=3000;

app.listen(port,()=>{
    console.log("running in 3000")
})
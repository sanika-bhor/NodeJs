const express= require('express');
const router=require('./router');

const app=express();

router(app);

app.listen(9090,()=>{
    console.log("server listening at port number 9090");
})
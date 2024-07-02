const express=require('express');
const router=require('./router');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('viewengine','ejs');

router(app);
app.listen(3030,()=>{
    console.log('server running at port 3030');
})


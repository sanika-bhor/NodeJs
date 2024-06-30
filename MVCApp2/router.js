const controller=require('./controller/controller');

// routing api at server side
module.exports=function(app){
    app.get("/", controller.linker);
    app.get("/profile", controller.profile);
  
}
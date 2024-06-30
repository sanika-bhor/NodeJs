const controller=require('./controller/controller');
const authcontroller=require('./controller/authcontroller');

module.exports=function(app){
    app.get("/", controller.index);
    app.get("/login", authcontroller.login);
    app.post("/login", authcontroller.postLogin);
  
}
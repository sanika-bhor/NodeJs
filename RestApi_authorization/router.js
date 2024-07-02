const home=require('./controller/homeController');


module.exports=function(app){
    app.get('/',home.login);
    app.get('/welcome',home.welcome)
    app.post('/welcome',home.welcome);
}
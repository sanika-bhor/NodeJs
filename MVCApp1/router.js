const controller=require('./controller/controller');

module.exports=function(app){
    app.get('/',controller.home);
    app.get('/about',controller.about);
    app.get('/contact',controller.contactus);
    app.get('/services',controller.services);
}
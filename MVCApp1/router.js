const controller=require('./controller/controller');

// routing api at server side
module.exports=function(app){
    app.get('/',controller.home);
    app.get('/about',controller.about);
    app.get('/contact',controller.contactus);
    app.get('/services',controller.services);
}
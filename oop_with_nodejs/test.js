import productController from "./controller.js";
import packageManager from "./repository.js";
import products from "./model.js";

var mgr=new packageManager();
var controller=new productController(mgr);

var flower1=new products(1,'rose','valentine flower',15,50);
var flower2=new products(2,'lotus','beautiful flower',45,23);

controller.post(flower1);
controller.post(flower2);

let data=controller.get();
console.log(data);

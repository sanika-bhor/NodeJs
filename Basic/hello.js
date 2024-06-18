var handler=require("./handler");

console.log("hello, welcome to mern stack")
var count=10;
var title="Trasflower";
var bol=false;


console.log("count: "+count);
console.log("title: "+title);
console.log("status: "+bol);


setInterval(handler.display, 3000);
setInterval(handler.load,4000)
console.log("ending of operation");
var SalesEmployee=require("./SalesEmployee");
var Employee=require("./Employee");
var SalesManager=require("./SalesManager");
var IApprisable = require("./Interface/IApprisable");
var ITrainer =require("./Interface/ITrainer")

var employee = new Employee(1, "sanika", "bhor", 20, 50000, 22000, 5000);
console.log("Employee Salary:"+employee.computePay());

var salesEmployee=new SalesEmployee(1,"sanika","bhor",20,50000,22000,5000,4600);
console.log("SalesEmployee Salary:" + salesEmployee.computePay());

var salesManager=new SalesManager(1,"sanika","bhor",20,50000,22000,5000,4600,10000);
console.log(`SalesManager Salary:${salesManager.computePay()}`);

//it internaly call utils.inspect() and return object
//but if i want to call tostring using this automaticaly the we have to do bellow things
//   toString() {
//     return "hello";
//   }
//   [util.inspect.custom]() {
//     return this.toString();
//   }

console.log(employee);

// if we want tostring then concatinate something and override toString the class
console.log(""+employee)


//polymorphism with interface
//we need to enforce polymorphism in js but in other language it give polymorphism
Object.assign(SalesEmployee.prototype,IApprisable.prototype);
Object.assign(SalesManager.prototype,IApprisable.prototype);



salesEmployee.conductApprisable();
salesManager.conductApprisable();
salesEmployee.conductTraining();
// salesEmployee.doWork();

var ref = typeof salesEmployee;
console.log(ref);

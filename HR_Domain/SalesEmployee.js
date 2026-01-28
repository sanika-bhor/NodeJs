var Employee=require("./Employee");


class SaleEmployee extends Employee {
  constructor(id, firstname, lastname, age, basicSalary, hra, tax, commition) {
    super(id, firstname, lastname, age, basicSalary, hra, tax);
    this.commition = commition;
  }

  doWork() {
    console.log("SalesEmployee doing his work");
  }

  computePay() {
    return super.computePay() + this.commition;
  }

  display()
  {
    console.log("ok");
  }

  conductApprisable() {
    console.log("apprisable of sales employee");
  }

  conductTraining() {
    console.log("training conduct by sales employee");
  }

  conductHandsonSession()
  {
    console.log("handson session conduct by the sales employee");
  }
}


module.exports=SaleEmployee;
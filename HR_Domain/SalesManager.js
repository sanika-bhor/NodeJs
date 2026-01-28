var SaleEmployee=require("./SalesEmployee");

class SalesManager extends SaleEmployee {
  constructor(
    id,
    firstname,
    lastname,
    age,
    basicSalary,
    hra,
    tax,
    commition,
    bonus,
  ) {
    super(id, firstname, lastname, age, basicSalary, hra, tax, commition);
    this.bonus = bonus;
  }

  doWork() {
    console.log("salesManager doing his work");
  }

  computePay() {
    return super.computePay() + this.bonus;
  }

  conductApprisable() {
    console.log("apprisable of sales manager");
  }

  conductTraining() {
    console.log("training conduct by sales Manager");
  }

  conductHandsonSession() {
    console.log("handson session conduct by the sales manager");
  }
}

module.exports=SalesManager;
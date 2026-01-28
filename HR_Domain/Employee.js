class Employee
{
    constructor(id,firstname,lastname,age,basicSalary,hra,tax)
    {
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.basicSalary=basicSalary;
        this.hra=hra;
        this.tax=tax;
    }

    doWork()
    {
        new Error("First implemet this doWork method");
    }

    computePay()
    {
        return this.basicSalary+this.hra-this.tax;
    }
    
    toString()
    {
        return "hello";
    }

    
}

module.exports=Employee;
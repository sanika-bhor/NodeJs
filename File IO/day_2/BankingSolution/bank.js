var account=require("./account");
console.log("****BAnking Application******");
var acct123 = new account.Account(266000);
acct123.deposit(7000);
var afterDeposite = acct123.getBalance();
console.log("your balance:"+afterDeposite);

var acct123 = new account.Account(16000);
acct123.withdraw(15000);

var afterDeposite = acct123.getBalance();
console.log("your balance:" + afterDeposite);
var notification=require("./notificationController");
var bankingOperation=require("./bankController");
var taxation=require("./taxController");
var eventModule=require("events");
var emitter = new eventModule.EventEmitter();

emitter.addListener("underBalance", notification.sendEmail);
emitter.addListener("underBalance", notification.sendSms);
emitter.addListener("underBalance", bankingOperation.blockAccount);
emitter.addListener("overbalance", taxation.payIncomeTax);

exports.Account=function(initialBalance)
{
    var balance=initialBalance;
    var monitor=function()
    {//10000
        if (balance <= 5000) {
          emitter.emit("underBalance");
        } else if (balance >= 250000) {
          emitter.emit("overBalance");
        }
    }

    var deposit=function(amount)
    {
        balance=balance+amount;
        monitor();
    }

    var withdraw=function(amount)
    {
        balance=balance-amount;
        monitor();
    }
    var getBalance=function()
    {
        return balance;
    }

    return{
        withdraw:withdraw,
        deposit:deposit,
        getBalance:getBalance

    }
}
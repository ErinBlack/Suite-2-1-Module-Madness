var http = require('http');
var randomNumber = require('./min-max');
var money = require('./money');
var accountBalance = require('./account-balance');
var minNumber = 100;
var maxNumber = 1000000;
var testNumber = 20000;



http.createServer(function(req, res){
// res.write(randomNumber(minNumber, maxNumber));
res.write(accountBalance.accountBalanceTitle());
res.write(money(randomNumber(minNumber, maxNumber)));

res.end();
}).listen(3000);

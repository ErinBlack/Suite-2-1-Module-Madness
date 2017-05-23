var http = require('http');
var randomNumber = require('./min-max');
var money = require('./money');
var accountBalance = require('./account-balance');
var minNumber = 100;
var maxNumber = 1000000;
var testNumber = 20000;

exports.accountBalance = function (){
  return money(randomNumber(minNumber, maxNumber));
};

 exports.accountBalanceTitle = function(){
  return 'Account balance: \n';
};

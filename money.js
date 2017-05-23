//create a USD value from Number

function dollarValue(numValue){
  var currencyConvert = numValue.toLocaleString();
  return '$' + currencyConvert + '\n';
}
module.exports = dollarValue;

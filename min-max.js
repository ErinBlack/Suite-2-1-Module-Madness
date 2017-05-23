//Creating function to return a random number

function minMax(min, max){
  var randomReturn = Math.floor(Math.random() * (max - min))  + min;
  return  randomReturn ;
}
module.exports = minMax;

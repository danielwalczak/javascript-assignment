// use _.partial function to implement functions:

var _ = require('lodash');

var addFiveAndSixAnd = _.partial(function(number) {
  return 5 + 6 + number;
});

var power = _.partial(function(exponent) {
  return Math.pow(2, exponent);
});

var powerTwo = _.partial(function(base) {
  return Math.pow(base, 2);
});
var powerThree = _.partial(function(base) {
  return Math.pow(base, 3);
});


console.log(addFiveAndSixAnd(4)); //15 (adds 5 + 6 + 4 = 15)

//Evaluates Math.power(2,3)
console.log(power(3)); //8

//Evaluates Math.power(3,2)
console.log(powerTwo(3)); //9

//Evaluates Math.power(3,3)
console.log(powerThree(3)); // 27

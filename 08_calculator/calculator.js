const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num2, num1) {
	return num2 - num1
};

const sum = function(array) {
	summation = 0;
  let i = 0;
  while (i < array.length){
    summation += array[i];
    i+=1;
  }
  return summation
};

const multiply = function() {
  let product = 1;
  for (let i = 0; i < arguments.length; i++){
    product *= arguments[i];
  }
  return product;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num) {
	prod = 1;
  if (num == 0){
    return 1;
  }
  return factorial(num - 1)*num

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const add = function(num1,num2) {
	let sum = num1+num2;
  return sum;

};

const subtract = function(num1,num2) {
	let difference = num1-num2;
  return difference; 
};

const sum = function(arr) {
  let total = 0;
	arr.forEach(element => {
    total += element;
  });
  return total;cl
};

const multiply = function(arr) {
  let product = 1;
	arr.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(num, power) {
  let product = 1;
  let arr = [];
	for(let i = 0; i<power; i++) {
    
    arr[i] = num;

  }

  arr.forEach(num => {
    product *= num;
    console.log(product);
  })
 
  return product;
};

const factorial = function(num) {
  let product = 1;
  for(i=1; i<=num; i++)  {
  console.log(i);
      product *= i;
  
}
  return product;
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

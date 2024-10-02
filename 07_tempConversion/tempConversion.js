const convertToCelsius = function(Fahrenheit) {

  let Celsius = (Fahrenheit-32) * (5/9);
  return Number(Celsius.toFixed(1));

};


const convertToFahrenheit = function(Celsius) {

  let Fahrenheit = (Celsius * (9/5)) + 32;
  return Number(Fahrenheit.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

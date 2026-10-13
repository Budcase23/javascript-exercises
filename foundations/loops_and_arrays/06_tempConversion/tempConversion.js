const convertToCelsius = function (value) {
  //°°C = (°F - 32) ÷ (9/5)
  result = (value - 32) / (9 / 5);
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function (value) {
  //F = °C * 9/5 + 32
  result = value * (9 / 5) + 32;
  return parseFloat(result.toFixed(1));
};

convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

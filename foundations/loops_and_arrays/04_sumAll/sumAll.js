const sumAll = function (start, end) {
  let sum = 0;
  if (typeof start !== "number" || typeof end !== "number") {
    return "ERROR";
  }
  if (start < 0 || end < 0) {
    return "Error";
  }
  for (i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};
sumAll(-10, 4);
// Do not edit below this line
module.exports = sumAll;

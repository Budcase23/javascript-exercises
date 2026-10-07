const repeatString = function (string, num) {
  let final = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 1; i <= num; i++) {
      final = final + string;
    }
  }

  return final;
};
call = repeatString("hey", 3);
console.log(call);

// Do not edit below this line
module.exports = repeatString;

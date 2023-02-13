const sumAll = function (num1, num2) {
  let error = "ERROR";
  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);
  let sum = 0;
  if (typeof num1 === "string" || typeof num2 === "string") {
    return error;
  } else if (typeof num1 === "object" || typeof num2 === "object") {
    return error;
  } else if (num1 >= 0 && num2 >= 0) {
    for (let i = start; i <= end; i++) {
      sum = sum + i;
    }
  } else return error;
  return sum;
};

sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;

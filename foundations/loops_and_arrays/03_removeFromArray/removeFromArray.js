const removeFromArray = function (list, ...args) {
  newList = [];
  list.forEach((item) => {
    if (!args.includes(item)) {
      newList.push(item);
    }
  });
  return newList;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;

/**
 *
 * @param array1: {Array}
 * @param array2: {Array}
 * @returns {Array}
 */
module.exports.arrayDiff = function arrayDiff(array1, array2) {
    let difference = [];
    
    array1.forEach(function(element) {
      if (!array2.includes(element)) {
        difference.push(element);
      }
    });
    
    array2.forEach(function(element) {
      if (!array1.includes(element)) {
        difference.push(element);
      }
    });
    
    return difference;
  };

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Array}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y) {
    var result = [];
  
    for (var i = x; i <= y; i++) {
      if (i % 2 === 0) {
        result.push(i + ' is even');
      } else {
        result.push(i + ' is odd');
      }
    }
  
    return result;
  };

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum = function rangeSum(x, y) {
    var sum = 0;

    for (var i = x; i <= y; i++) {
        sum += i;
    }

    return sum;
};

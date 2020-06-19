/**
 * @param a
 * @param b
 * @returns {number}
 */
function sum(a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    throw new TypeError('Please enter numbers.');
  }
  return a+b;
}

module.exports = sum;

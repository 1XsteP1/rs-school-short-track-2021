/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const digits = n.toString().split('');

  const nums = digits.map((item) => +item);

  let res = 0;

  if (nums.length > 1) {
    res = nums.reduce((acc, cur) => acc + cur);

    if (res.toString().split('').length > 1) {
      getSumOfDigits(res);
    } else {
      return res;
    }
  }

  return getSumOfDigits(res);
}

module.exports = getSumOfDigits;

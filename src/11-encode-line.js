/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let map = new Map();
  const array = str.split('');

  array.forEach((v, i) => {
    if (v === array[i + 1]) {
      map.set(v, map.get(v) ? map.get(v) + 1 : 1);
    } else if (map.size) {
      map.forEach((value, index) => {
        result = result.concat(value + 1 + index);
      });
      map = new Map();
    } else {
      result = result.concat(v);
    }
  });
  return result;
}

module.exports = encodeLine;

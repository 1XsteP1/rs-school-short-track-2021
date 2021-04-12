/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let s3 = s1;
  const s4 = s2;

  for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
    const letter = new RegExp(`\\${s4[i]}`, '');
    if (s3.indexOf(`${s4[i]}`) >= 0) {
      result++;
      s3 = s3.replace(letter, ' ');
    }
    s4.replace(letter, ' ');
  }

  return result;
}

module.exports = getCommonCharacterCount;

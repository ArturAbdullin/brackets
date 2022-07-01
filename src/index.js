/**
 *
 * @param {string} s
 * @param {string[][]} bracketsConfig
 * @returns {boolean}
 */
function check(s, bracketsConfig) {
  let map = new Map();
  for (let conf of bracketsConfig) {
    map.set(conf[1], conf[0]);
  }

  let tempArray = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && tempArray[tempArray.length - 1] === map.get(s[i])) {
      tempArray.pop();
      continue;
    }
    tempArray.push(s[i]);
  }

  return tempArray.length === 0;
}

module.exports = check;
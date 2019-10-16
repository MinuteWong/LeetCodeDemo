/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  var list = source[digits.charAt(0)];
  if(digits.length === 1) return list;
  var result = letterCombinations(digits.substring(1));
  var ret = [];
  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < result.length; j++) {
      var str = list[i] + result[j];
      ret.push(str);
    }
  }
  return ret;
};

var source = [ , , 
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z']
]
// @lc code=end


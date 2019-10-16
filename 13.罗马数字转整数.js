/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if(s.length === 0) return 0;
  var value = romanToNumsMapper[s.substring(0, 2)]
  if (value) 
    return value + romanToInt(s.substring(2));
  else {
    var value = romanToNumsMapper[s.charAt(0)];
    return value + romanToInt(s.substring(1));
  }
};

var romanToNumsMapper = {
  'I': 1,
  'IV': 4,
  'V': 5,
  'IX': 9,
  'X': 10,
  'XL': 40,
  'L': 50,
  'XC': 90,
  'C': 100,
  'CD': 400,
  'D': 500,
  'CM': 900,
  'M': 1000,
}
// @lc code=end


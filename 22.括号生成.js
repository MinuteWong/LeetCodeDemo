/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
  var result = [];
  _generateParenthesis(n, 0, 0, '', result);
  return result;
};

var _generateParenthesis = function(n, count1, count2, str, result) {
  

  if (count1 > n || count2 > n) return result;
  if (count1 === n && count2 === n) result.push(str);

  if (count1 >= count2) {
    _generateParenthesis(n, count1 + 1, count2, str + '(', result);
    _generateParenthesis(n, count1, count2 + 1, str + ')', result);
  }
}
// @lc code=end


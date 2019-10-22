/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0) return true;
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    if(stack.length > 0 && mapper[s.charAt(i)] === stack[stack.length - 1]) {
      stack.pop();
    } else if(right.includes(s.charAt(i))) {
      return false;
    } else {
      stack.push(s.charAt(i));
    }
  }
  return stack.length === 0
};

var right = [')', '}', ']']
var mapper = {
  ')': '(',
  '}': '{',
  ']': '['
}

// @lc code=end


/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  var N = haystack.length, M = needle.length;
  var skip = 0;
  var right = [];
  for (var i = 0; i < M; i++) {
    right[needle.charCodeAt(i)] = i;
  } 

  for (var j = 0; j <= N - M; j += skip) {
    skip = 0;
    for (var i = M - 1; i >= 0; i--) {
      if (needle.charAt(i) !== haystack.charAt(j + i)) {
        var rightValue = right[haystack.charCodeAt(j + i)];
        if (rightValue >= 0) skip = i - rightValue;
        else skip = i + 1;
        if (skip < 0) skip = 1;
        break;
      }
    }
    if (skip === 0) return j;
  }
  return -1;
};
// @lc code=end


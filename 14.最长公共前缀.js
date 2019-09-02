/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return "";
  var str = strs[0];
  label: for(var i = 0; i < str.length; i++) {
    var j = 1;
    while(j < strs.length) {
      if(strs[j].charAt(i) !== str.charAt(i)) break label;
      j++;
    }
  }
  return str.slice(0, i);
};


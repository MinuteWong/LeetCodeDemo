/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var i = 0, j = height.length - 1;
    var min = Math.min(height[i], height[j]);
    var max = Math.max(height[i], height[j])
    var conut = 0;
    while(i < j) {
      var current;
      if(height[i] > height[j]) current = height[--j];
      else current = height[++i];
      if(current < min) conut = conut + min - current;
      else if(current > max) {
        min = max;
        max = current
      } else {
        min = current;
      }
    }
    return conut;
};


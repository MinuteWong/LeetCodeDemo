/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */

 var nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
 var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
var intToRoman = function(num) {
  var index = nums.length - 1;
  var str = ''
  while(index >= 0) {
    if(num >= nums[index]) {
      str += roman[index];
      num -= nums[index];
    }
    else index--;
  }
  return str;
};

// console.log(intToRoman(3))
// @lc code=end


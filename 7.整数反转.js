/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var MaxValue = Math.pow(2, 31);
    var MinValue = -MaxValue;
    if(x > MaxValue || x < MinValue) return 0;
    var sum = 0;
    while(x !== 0) {
      var pop =  x % 10;
      if(sum > MaxValue/10 || sum === MaxValue/10 && pop > 7) return 0;
      if(sum < MinValue/10 || sum === MinValue/10 && pop < -8) return 0;
      sum = sum*10 + pop;
      x = parseInt(x / 10);
    }
    return sum;
};

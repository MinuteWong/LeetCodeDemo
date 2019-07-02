/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for(var i = 0; i < nums.length; i++) {
      while(nums[i] > 0 && nums[i] < nums.length && nums[i] !== nums[nums[i] - 1]) {
        exch(nums, i, nums[i] - 1);
      }
    }

    for(var j = 0; j < nums.length; j++) {
      if(nums[j] !== j+1) return j+1;
    }

    return nums.length + 1;
};

var exch = function(arr, i, j) {
  const cache = arr[i];
  arr[i] = arr[j];
  arr[j] = cache;
};



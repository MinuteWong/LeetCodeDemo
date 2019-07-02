/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};

var binarySearch = function(nums, target, lo, he) {
  if(lo > he) return lo;
  var mid = Math.floor((he - lo)/2) + lo;
  if(nums[mid] > target) return binarySearch(nums, target, lo, mid - 1);
  else if(nums[mid] < target) return binarySearch(nums, target, mid+1, he);
  else return mid;
}
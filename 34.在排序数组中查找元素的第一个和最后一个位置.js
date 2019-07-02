/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var index = binarySearch(nums, target, 0, nums.length - 1);
    if(index === -1) return [-1, -1];
    var i = index, j = index;
    while(nums[i] === target) i--;
    while(nums[j] === target) j++;
    return [i + 1, j - 1];
};

var binarySearch = function(nums, target, lo, he) {
  if(lo > he) return -1;
  var mid = Math.floor((he - lo)/2) + lo;
  if(nums[mid] > target) return binarySearch(nums, target, lo, mid - 1);
  else if(nums[mid] < target) return binarySearch(nums, target, mid+1, he);
  else return mid;
}


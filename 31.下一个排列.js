/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  for (var i = nums.length - 1; i >= 1; i--) {
    if (nums[i] > nums[i - 1]) {
      for (var j = i; j < nums.length; j++) {
        if (nums[j] > nums[i - 1]) continue;
        else break;
      }
      var cache = nums[i - 1];
      nums[i - 1] = nums[j - 1];
      nums[j - 1] = cache;
      return quickSort(nums, i + 1, nums.length - 1);
    }
  }
  return quickSort(nums, 0, nums.length - 1);
};
const quickSort = (arr, lo, he) => {
  if (lo >= he) return;
  const middle = partition(arr, lo, he);
  quickSort(arr, lo, middle - 1);
  quickSort(arr, middle + 1, he);
  return arr;
};

var partition = function(arr, lo, he) {
  const base = arr[lo];
  let i = lo;
  let j = he + 1;
  while (true) {
    while (arr[++i] < base) if (i === he) break;
    while (base < arr[--j]) continue;
    if (i >= j) break;
    exch(arr, i, j);
  }
  exch(arr, lo, j);
  return j;
};

var exch = function(arr, i, j) {
  const cache = arr[i];
  arr[i] = arr[j];
  arr[j] = cache;
};

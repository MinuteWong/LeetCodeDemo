/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (39.04%)
 * Total Accepted:    18.1K
 * Total Submissions: 46.2K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 *
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 *
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) return -1;
  const sortNums = nums.sort((a, b) => a - b);
  const length = sortNums.length;
  let sum;
  for (let i = 0; i < length; i++) {
    let lo = i + 1;
    let hi = length - 1;
    while (hi > lo) {
      const sumNow = sortNums[i] + sortNums[lo] + sortNums[hi];
      if (
        sum === undefined ||
        Math.abs(sum - target) > Math.abs(sumNow - target)
      ) {
        sum = sumNow;
      }
      if (sumNow - target > 0) hi--;
      else if (sumNow - target < 0) lo++;
      else return sumNow;
    }
  }
  return sum;
};

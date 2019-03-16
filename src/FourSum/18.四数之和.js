/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (34.37%)
 * Total Accepted:    13.5K
 * Total Submissions: 39K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 *
 * 注意：
 *
 * 答案中不可以包含重复的四元组。
 *
 * 示例：
 *
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 *
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  const sortNums = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < sortNums.length - 3; i++) {
    if (i !== 0 && sortNums[i - 1] === sortNums[i]) continue;
    for (let j = i + 1; j < sortNums.length - 2; j++) {
      if (j !== 1 && sortNums[j - 1] === sortNums[j]) continue;
      let right = sortNums.length - 1;
      let left = j + 1;
      while (right > left) {
        const sum =
          sortNums[right] + sortNums[left] + sortNums[i] + sortNums[j];
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          res.push([sortNums[i], sortNums[j], sortNums[left], sortNums[right]]);
          left++;
          while (sortNums[left] === sortNums[left - 1]) {
            left++;
          }
        }
      }
    }
  }
  return res;
};

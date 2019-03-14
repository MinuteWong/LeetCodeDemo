/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (21.34%)
 * Total Accepted:    39.8K
 * Total Submissions: 186.7K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = (nums) => {
  if (nums.length < 3) return [];
  const sortNums = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < sortNums.length - 2; i++ ) {
    if (i !== 0 && sortNums[i - 1] === sortNums[i]) continue;
    let right = sortNums.length - 1;
    let left = i + 1;
    while (right > left) {
      const sum = sortNums[right] + sortNums[left] + sortNums[i];
      if (sum < 0) {
        left++;
        while (sortNums[left] === sortNums[left - 1]) {
          left++;
        }
      } else if (sum > 0) {
        right --;
        while (sortNums[right] === sortNums[right + 1]) {
          right--;
        }
      }
      else {
        res.push([sortNums[i], sortNums[left], sortNums[right]]);
        left++;
        while (sortNums[left] === sortNums[left - 1]) {
          left++;
        }
      }
    }
  }
  return res;
};


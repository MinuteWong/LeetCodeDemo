/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let q = []
  let hh = 0
  let tt = -1

  let r = []

  for (let i = 0; i < nums.length; i++) {
    if (hh <= tt && i + 1 > q[hh] + k) hh++
    while (hh <= tt && nums[q[tt]] < nums[i]) tt--
    q[++tt] = i
    if (i + 1 >= k) r.push(nums[q[hh]])
  }

  return r
};

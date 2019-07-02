/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
   return combination(candidates, target, 0);
};

var combination = function(candidates, target, start) {
  var sum = [];
  for(var i = start; i < candidates.length; i++) {
    if(candidates[i] === target) sum.push([candidates[i]]);
    else if(candidates[i] < target) {
      var child = combination(candidates, target - candidates[i], i);
      for(var j = 0; j < child.length; j++) {
        child[j].unshift(candidates[i]);
        sum.push(child[j]);
      };
    };
  }
  return sum;
}


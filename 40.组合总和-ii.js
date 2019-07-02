/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  quickSort(candidates, 0, candidates.length - 1);
  return combination(candidates, target, 0);
};

var combination = function(candidates, target, start) {
  var sum = [];
  var nextValue = target;
  for(var i = start; i < candidates.length; i++) {
    if((target - candidates[i]) === nextValue) continue;
    if(candidates[i] === target) sum.push([candidates[i]]);
    else if(candidates[i] < target) {
      var child = combination(candidates, target - candidates[i], i + 1);
      for(var j = 0; j < child.length; j++) {
        child[j].unshift(candidates[i]);
        sum.push(child[j]);
      };
    };
    nextValue = target - candidates[i];
  }
  return sum;
}

var quickSort = (arr, lo, he) => {
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


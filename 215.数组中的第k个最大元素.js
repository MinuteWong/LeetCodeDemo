/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  var heap = new Heap(k);
  for (var i = 0; i < nums.length; i++) {
    heap.insert(nums[i]);
  }
  return heap.heap[1];
};

/**
 * @param {number} k
 */
function Heap(k) {
  this.heap = [undefined];
  this.maxLength = k;
}

Heap.prototype.insert = function(value) {
  if (this.heap.length < this.maxLength + 1) {
    this.heap.push(value);
    this.swim(this.heap.length - 1);
  } else {
    if (value > this.heap[1]) {
      this.heap[1] = value;
      this.sink(1);
    }
  }
};

Heap.prototype.swim = function(k) {
  while (k > 1) {
    var father = Math.floor(k / 2);
    if (this.heap[father] > this.heap[k]) {
      exch(this.heap, k, father);
      k = father;
    } else {
      break;
    }
  }
};

Heap.prototype.sink = function(k) {
  while (2 * k < this.heap.length) {
    var child = 2 * k;
    if (child < this.heap.length && this.heap[child] > this.heap[child + 1])
      child++;
    if (this.heap[child] > this.heap[k]) break;
    exch(this.heap, k, child);
    k = child;
  }
};

var exch = function(arr, i, j) {
  const cache = arr[i];
  arr[i] = arr[j];
  arr[j] = cache;
};


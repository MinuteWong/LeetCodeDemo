/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;
  var now = null;
  if(l1.val < l2.val) {
    now = l1;
    now.next = mergeTwoLists(l1.next, l2);
  } else {
    now = l2;
    now.next = mergeTwoLists(l1, l2.next);
  }
  return now;
};
// @lc code=end


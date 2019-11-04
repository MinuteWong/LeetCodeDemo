/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head, prev) {
  if (!head) return null;

  if (prev) {
    prev.next = swapPairs(head.next);
    return prev;
  } else {
    var now = head.next;
    if (!now) return head;
    now.next = swapPairs(head.next, head);
    return now;
  }
};
// @lc code=end


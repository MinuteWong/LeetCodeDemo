/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head || k <= 1) return head;
  var startNode = { next: head };
  reverse(head, head, k, startNode);
  if (head.next) {
    var nextReverseKGroup = head.next;
    const value = reverseKGroup(nextReverseKGroup, k);
    if (value) head.next = value;
  }
  return startNode.next;
};

var reverse = function(source, head,  k, startNode) {
  if (k > 1) {
    if (!head.next) return null;
    var node = reverse(source, head.next, k - 1, startNode);
    if (!node) return null;
    var chainTail = node
    chainTail.next = head;
  } else {
    source.next = head.next;
    startNode.next = head;
  }
  return head;
}
// @lc code=end


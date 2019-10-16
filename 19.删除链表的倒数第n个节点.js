/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(!head.next) {
    if(n === 1) return null;
    else return 1;
  }
  
  var ret = removeNthFromEnd(head.next, n);
  if (typeof ret === 'number') {
    if (n === ret + 1) {
      var next = head.next;
      head.next = null;
      head = null;
      return next;
    } else {
      return ret + 1;
    }
  } else {
    head.next = ret;
    return head;
  }
};
// @lc code=end


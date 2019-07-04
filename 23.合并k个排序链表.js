/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if(lists.length === 0) return null;
  if(lists.length === 1) return lists[0];
  if(lists.length === 2) {
    return merge(lists[0], lists[1]);
  }
  var mid = Math.floor(lists.length / 2);
  var l1 = [];
  var l2 = [];
  for(var i = 0; i < mid; i++) {
    l1.push(lists[i]);
  }
  for(var j = mid; j < lists.length; j++) {
    l2.push(lists[j]);
  }
  return merge(mergeKLists(l1),mergeKLists(l2));
};

var merge = function(listNode1, listNode2) {
  var mergeNode = null;
  if(!listNode1) return listNode2;
  if(!listNode2) return listNode1;
  if(listNode1.val > listNode2.val) {
    mergeNode = listNode2;
    listNode2 = listNode2.next;
  } else {
    mergeNode = listNode1;
    listNode1 = listNode1.next;
  }
  var current = mergeNode;
  while(listNode2 || listNode1) {
    if(!listNode2) {
      current.next = listNode1;
      listNode1 = listNode1.next;
    } else if(!listNode1) {
      current.next = listNode2;
      listNode2 = listNode2.next;
    } else if(listNode1.val > listNode2.val) {
      current.next = listNode2;
      listNode2 = listNode2.next;
    } else {
      current.next = listNode1;
      listNode1 = listNode1.next;
    }
    current = current.next;
  }
  return mergeNode;
}


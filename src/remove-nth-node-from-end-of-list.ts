/**
 * @see https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * 
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * 
 * Constraints:
 * - The number of nodes in the list is sz
 * - 1 <= sz <= 30
 * - 0 <= Node.val <= 100
 * - 1 <= n <= sz
 */

/*
    Solution: iterative approach using two pointers.
    Suppose in the beginning the first pointer is at the
    (N + 1)th node from the start and the second pointer
    is at the head of the linked list. If we move both
    pointers one step at a time till the first pointer
    reaches the end, the second pointer will point to the
    (N + 1)th node from the end, and we can remove the next
    node (i.e.the Nth node) from the end.
*/


import { LinkedListNode as ListNode } from '../schema';

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) {
      return null;
    }
    
    let firstPointer: ListNode | null = head;
    
    for (let i = 1; i < n + 1; i++) {
        firstPointer = firstPointer.next as ListNode;
    }
    
    if (firstPointer === null) {
        return head.next;
    }
    
    let secondPointer: ListNode | null = head;
    
    while (firstPointer.next) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next as ListNode;
    }
    
    let temp = secondPointer.next;
    secondPointer.next = temp && temp.next;
    
    return head;
};

export {}

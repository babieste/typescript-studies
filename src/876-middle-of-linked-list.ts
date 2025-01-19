import { LinkedListNode as ListNode } from "../data-structures";

/**
 * [876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
 *
 * Given the head of a singly linked list, return the middle node of the linked list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 * Constraints:
 * - The number of nodes in the list is in the range [1, 100]
 * - 1 <= Node.val <= 100
 */
export function middleNode(head: ListNode | null): ListNode | null {
  let listLength: number = 0;
  let n: ListNode | null = head;

  while (n?.next) {
    listLength++;
    n = n.next;
  }

  let middleNodeIndex = Math.ceil(listLength / 2);

  n = head;
  let i = 0;
  while (i < middleNodeIndex) {
    n = n && n.next;
    i++;
  }

  return n;
}

export {};

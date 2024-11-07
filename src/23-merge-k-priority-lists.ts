/**
 * @see https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * Submission: https://leetcode.com/problems/merge-k-sorted-lists/submissions/914115287/
 *
 * You are given an array of `k` linked-lists `lists`, each linked-list
 * is sorted in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * Constraints:
 *  - k == lists.length
 *  - 0 <= k <= 10^4
 *  - 0 <= lists[i].length <= 500
 *  - -10^4 <= lists[i][j] <= 10^4
 *  - lists[i] is sorted in ascending order
 *  - The sum of lists[i].lengh will not exceed 10^4
 *
 * Comments
 *  This problem can also be resolved by Divide and Conquer  and
 *  Priority Queue aproaches.
 *
 * Complexity Analysis:
 *  - Space complexity: O(N), since we are creating a new linked list.
 *  - Time compleixty: O(kN), where k is the number of lists and there are
 *  N nodes in the final linked list.
 */

import { LinkedListNode as ListNode } from "../schema/linked-list";

export function mergeKLists(_lists: Array<ListNode | null>): ListNode | null {
  // Remove empty lists
  let lists = _lists.filter((listNode): listNode is ListNode =>
    Boolean(listNode)
  );

  if (!lists.length) {
    return null;
  } else if (lists.length === 1) {
    return lists[0];
  }

  let currentNode: ListNode | null = null;
  let head: ListNode | null = null;

  while (lists.length) {
    const index = getListIndexWithMaximumPriority(lists);

    if (!currentNode) {
      currentNode = new ListNode(lists[index].val);

      if (lists[index].next) {
        lists[index] = lists[index].next;
      }

      head = currentNode;
    } else {
      currentNode.next = new ListNode(lists[index].val);

      if (lists[index].next) {
        lists[index] = lists[index].next;
      }

      currentNode = currentNode.next;
    }

    if (!lists[index]) {
      lists.splice(index, 1);
    }
  }

  return head;
}

/**
    The list index with maximum priority is the one with the smallest number.
 */
function getListIndexWithMaximumPriority(lists: ListNode[]) {
  let minimumValue = Number.MAX_SAFE_INTEGER;
  let listNodeIndex = -1;

  for (let i = 0; i < lists.length; i++) {
    if (lists[i].val < minimumValue) {
      minimumValue = lists[i].val;
      listNodeIndex = i;
    }
  }

  return listNodeIndex;
}

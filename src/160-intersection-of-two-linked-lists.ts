import { LinkedListNode as ListNode } from "../schema/linked-list";

/** Problem [160. Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/). */
export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let auxA = headA;
  let auxB = headB;
  let aLength = 0;
  let bLength = 0;

  while (auxA || auxB) {
    if (auxA) {
      auxA = auxA.next;
      aLength++;
    }

    if (auxB) {
      auxB = auxB.next;
      bLength++;
    }
  }

  const diff = bLength - aLength;

  auxA = headA;
  auxB = headB;

  if (diff >= 0) {
    for (let k = 0; k < diff; k++) {
      auxB = auxB?.next ?? null;
    }
  } else {
    for (let k = 0; k < Math.abs(diff); k++) {
      auxA = auxA?.next ?? null;
    }
  }

  while (auxA) {
    if (auxA === auxB) {
      return auxA;
    }

    auxA = auxA.next;
    auxB = auxB?.next ?? null;
  }

  return null;
}

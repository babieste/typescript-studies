import { LinkedListNode } from "../data-structures";
import { LinkedList } from "../data-structures/linked-list";
import { getIntersectionNode } from "./160-intersection-of-two-linked-lists";

describe("160. Intersection of Two Linked Lists", () => {
  test("For lists [4, 1, 8, 4, 5] and [5, 6, 1, 8, 4, 5] the intersection is 8", () => {
    const nodeA = LinkedListNode.fromArray([4, 1]);
    const nodeB = LinkedListNode.fromArray([5, 6, 1]);
    const intersection = LinkedListNode.fromArray([8, 4, 5]);
    const listA = new LinkedList(nodeA);
    const listB = new LinkedList(nodeB);
    listA.insert(intersection);
    listB.insert(intersection);
    const result = getIntersectionNode(listA.head, listB.head);
    expect(result?.val).toBe(8);
  });

  test("For lists [23, 75, 42, 9, 88, 61] and [88, 61] the intersection is 88", () => {
    const nodeA = LinkedListNode.fromArray([23, 75, 42, 9]);
    const nodeB = LinkedListNode.fromArray([]);
    const intersection = LinkedListNode.fromArray([88, 61]);
    const listA = new LinkedList(nodeA);
    const listB = new LinkedList(nodeB);
    listA.insert(intersection);
    listB.insert(intersection);
    const result = getIntersectionNode(listA.head, listB.head);
    expect(result?.val).toBe(88);
  });

  test("For lists [1, 2, 3] and [4, 5, 6] there is no intersection", () => {
    const nodeA = LinkedListNode.fromArray([1, 2, 3]);
    const nodeB = LinkedListNode.fromArray([4, 5, 6]);
    const listA = new LinkedList(nodeA);
    const listB = new LinkedList(nodeB);
    const result = getIntersectionNode(listA.head, listB.head);
    expect(result).toBe(null);
  });
});

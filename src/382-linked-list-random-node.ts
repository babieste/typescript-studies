/**
 * @see https://leetcode.com/problems/linked-list-random-node/description/
 *
 * Given a singly linked list, return a random node's value from the linked list.
 * Each node must have the same probability of being chosen.
 *
 * Implement the Solution class:
 *      - Solution(ListNode head): Initializes the object with the head of the singly-linked list head.
 *      - getRandom(): Chooses a node randomly from the list and returns its value.
 *
 * All the nodes of the list should be equally likely to be chosen.
 *
 * Constraints
 * - The number of nodes in the linked list will be in the range [1, 10^4]
 * - -10^4 <= Node.val <= 10^4
 * - At most 10^4 calls will be made to getRandom
 */

/**
 * Comments
 *
 * This problem is all about reproducing the Resevoir Sampling algorithms
 * as explained in the Editorial explanation. Using the Algorithm R, the
 * most simple one, suffice for the solution of the problem (@see https://en.wikipedia.org/wiki/Reservoir_sampling).
 * Trying to solve in a naive approach - first iterating through the linked list to know it's size,
 * tranforming it into an array of numbers and then returning a random
 * position - would fail for the follow up questions:
 *  1) It wouldn't use a constant space
 *  2) The linked list could not fit into memory
 */

/**
 * Complexity Analisys:
 * Space complexity: O(1)
 *  Space complexity is constant because we use auxiliary variables of
 *  constant size to retrieve the random node.
 *
 * Time complexity: O(N)
 *  Space complexity is N, where N is the size of the list,
 *  because we iterate over the linked list exactly one time.
 */

import { LinkedListNode as ListNode } from "../schema/linked-list";

class Solution {
  constructor(public readonly head: ListNode) {}

  public getRandom(): number {
    // Reservoir contains k initial values from sample.
    // In this case, our sample is sized `1` - we only want one random number -
    // thus k = 1 and reservoir it's initialized with `this.head` value.
    let reservoir = this.head.val;

    // To generate a random number `j` with decreasing
    // probability, we start from `k + 1` until `n` (since we don't know
    // the linked list's size, `n` will be represented by the end of the traversal
    // of the list).
    let i = 2;

    // Keep track of the node (this is equivalent to i = k + 1, if we were dealing with numbers)
    let current: ListNode | null = this.head.next;

    // Iterate from `k` to `n - 1`
    while (current) {
      // Generate a random number from the interval [0, i].
      const j = this.generateRandomNumber(i);

      // If is in the interval of the sample [0, k], update the value on the reservoir
      if (j <= 1) {
        reservoir = current.val;
      }

      i = i + 1;
      current = current.next;
    }

    return reservoir;
  }

  /** Returns a random number from the range [0, i]. */
  private generateRandomNumber(i: number): number {
    return Math.floor(Math.random() * i + 1);
  }
}

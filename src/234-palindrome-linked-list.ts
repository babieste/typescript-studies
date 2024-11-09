/**
 * @see https://leetcode.com/problems/palindrome-linked-list/description/
 *
 * Submissions:
 *
 * Given the head of a singly linked list, return true if it is a
 * palindrome or false otherwise.
 *
 * Constraints:
 * - The number of nodes in the list is in the range [1, 105].
 * - 0 <= Node.val <= 9
 */
import { LinkedListNode as ListNode } from "../data-structures/linked-list";

let headNode: ListNode | null = null;

export function isPalindrome(head: ListNode | null): boolean {
  let stackNode: ListNode | null = head;
  headNode = head;

  return isPalindromeAux(stackNode);
}

function isPalindromeAux(stackNode: ListNode | null): boolean {
  if (stackNode == null) {
    return true;
  }

  let previousCompare = isPalindromeAux(stackNode.next);

  if (previousCompare == false) {
    return false;
  }

  let areEqual = stackNode.val === headNode?.val;

  if (areEqual == false) {
    return false;
  }

  headNode = headNode?.next ?? null;

  return true;
}

// --- Implementação iterativa ---
// function isPalindrome(head: ListNode | null): boolean {
//     if (!head) {
//         return true;
//     }

//     const stack = [];
//     let currentNode = head;

//     while (currentNode) {
//         stack.push(currentNode.val);
//         currentNode = currentNode.next;
//     }

//     currentNode = head;
//     while (stack.length) {
//         const val = stack.pop();

//         if (val !== currentNode.val) {
//             return false;
//         }

//         currentNode = currentNode.next;
//     }

//     return true;
// };

// --- Implementação do professor ---
// function isPalindromeRecursion(head, object) {
//   if (head === null) {
//     return true;
//   }
//   const isPalindromeGlobal = isPalindromeRecursion(head.next, object);
//   const isPalindromeLocal = head.val === object.pointer.val;
//   object.pointer = object.pointer.next;

//   return isPalindromeLocal && isPalindromeGlobal;
// }

// var isPalindrome = function (head) {
//   return isPalindromeRecursion(head, { pointer: head });
// };

/**
 * @see https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * Given the head of a singly linked list where elements are sorted in ascending order,
 * convert it to a height-balanced binary search tree.
 *
 * Constraints:
 *  - The number of nodes in `head` is in the range [0, 2 * 10^4]
 *  - -10^5 <= Node.val <= 10^5
 *
 * Complexity Analysis
 *  - Space complexity: is O(n) because we create a binary tree of N nodes
 *  - Time complexity: is O(log n) due to AVL Tree data structure calculations, it is based
 *  on the tree's height.
 *
 * Comments
 *  The problem states that it wants a "heigh-balanced binary search tree",
 *  meaning that we need to implement the insertion algorithm in a way
 *  that the tree becomes balanced after the insertion of a node, i. e. we
 *  need to implement an AVL tree.
 *
 */
import { LinkedListNode as ListNode } from "../schema/linked-list";
import { BinaryTreeNode as TreeNode } from "../schema/binary-tree";

function sortedListToBST(head: ListNode | null): TreeNode | null {
  let root: TreeNode | null = null;

  while (head) {
    root = addNodeToTree(root, new TreeNode(head.val));
    head = head.next;
  }

  return root;
}

function leftRotate(z: TreeNode): TreeNode {
  const y = z.right as TreeNode;
  const T2 = y.left;

  y.left = z;
  z.right = T2;
  y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
  z.height = 1 + Math.max(getHeight(z.left), getHeight(z.right));

  return y;
}

function rightRotate(z: TreeNode): TreeNode {
  const y = z.left as TreeNode;
  const T3 = y.right;

  y.right = z;
  z.left = T3;
  y.height = 1 + Math.max(getHeight(y.left), getHeight(y.right));
  z.height = 1 + Math.max(getHeight(z.left), getHeight(z.right));

  return y;
}

function getHeight(treeNode: TreeNode | null): number {
  if (!treeNode) {
    return -1;
  }

  return treeNode.height ?? 1;
}

function getBalanceFactor(treeNode: TreeNode | null): number {
  return treeNode ? getHeight(treeNode.left) - getHeight(treeNode.right) : 0;
}

function addNodeToTree(root: TreeNode | null, node: TreeNode): TreeNode {
  if (!root) {
    return node;
  }

  if (node.val < root.val) {
    root.left = addNodeToTree(root.left, node);
  } else {
    root.right = addNodeToTree(root.right, node);
  }

  root = balanceTree(root);
  root.height = 1 + Math.max(getHeight(root.left), getHeight(root.right));
  return root;
}

function balanceTree(root: TreeNode): TreeNode {
  const balanceFactor = getBalanceFactor(root);
  const leftSubtreeBalanceFactor = getBalanceFactor(root.left);
  const rightSubtreeBalanceFactor = getBalanceFactor(root.right);

  // The tree is balanced.
  if (Math.abs(balanceFactor) <= 1) {
    return root;
  }

  if (balanceFactor > 1 && leftSubtreeBalanceFactor > 0) {
    return rightRotate(root);
  }

  if (balanceFactor > 1 && leftSubtreeBalanceFactor < 0) {
    root.left = leftRotate(root.left as TreeNode);
    return rightRotate(root);
  }

  if (balanceFactor < -1 && rightSubtreeBalanceFactor > 0) {
    root.right = rightRotate(root.right as TreeNode);
    return leftRotate(root);
  }

  if (balanceFactor < -1 && rightSubtreeBalanceFactor < 0) {
    return leftRotate(root);
  }

  return root;
}

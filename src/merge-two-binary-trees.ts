/**
 * @see https://leetcode.com/problems/merge-two-binary-trees/
 *
 * You are given two binary trees `root1` and `root2`. Imagine that when you put one of them to cover
 * the other, some nodes of the two trees are overlapped while the others are not. You need to
 * merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then
 * sum node values up as the new value of the merged node. Otherwise, the NOT null node will be
 * used as the node of the new tree.
 *
 * Return the merged tree.
 *
 * Note: The merging process must start from the root nodes of both trees.
 *
 * Constraints:
 * - The number of nodes in both trees is in the range [0, 2000].
 * - -10^4 <= Node.val <= 10^4
 *
 * Time and space complexity analysis:
 * 1) Time complexity : O(m). A total of m nodes need to be traversed. Here, m represents the
 * minimum number of nodes from the two given trees.
 * 2) Space complexity : O(m). The depth of the recursion tree can go upto m in the case of a skewed tree.
 */
import { BinaryTreeNode as TreeNode } from "../data-structures";

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null && root2 == null) return null;
  if (root1 === null) return root2;
  if (root2 === null) return root1;

  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
}

export {};

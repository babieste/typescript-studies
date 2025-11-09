import { BinaryTreeNode as TreeNode } from "../data-structures/binary-tree";

/**
 * ### [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
 *
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along
 * the longest path from the root node down to the farthest leaf node.
 *
 * #### Constraints
 * - The number of nodes in the tree is in the range `[0, 10^4]`
 * `-100 <= Node.val <= 100`
 *
 * #### Complexity Analysis
 * - Time complexity: `O(N)` since all nodes need to be visited
 * at least once.
 * - Space complexity: `O(H)` since all levels of the tree need
 * to be visited at least once.
 */
export function maxDepth(root: TreeNode | null): number {
    const recursiveMaxDepth = (
        node: TreeNode | null,
        currentDepth: number
    ): number => {
        if (!node) {
            return currentDepth;
        }

        return Math.max(
            recursiveMaxDepth(node.left, currentDepth + 1),
            recursiveMaxDepth(node.right, currentDepth + 1)
        );
    };

    return recursiveMaxDepth(root, 0);
}

import { BinaryTreeNode as TreeNode } from "../data-structures/binary-tree";

/**
 * ### [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 * #### Complexity Analysis
 * - Time complexity: to verify if the tree is balanced, it is required
 * to visit all nodes. Thus the time complexity `O(N)`, where N is the
 * number of nodes.
 * - Space complexity: given it's a recursive implementation, the space
 * complexity is directly related to the height of the tree. If the tree
 * is skewed, the space complexity is `O(N)`. In average, `O(H)`, where
 * H is the height of the tree.
 */
export function isBalanced(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    const calculateTreeHeight = (node: TreeNode | null): number => {
        if (!node) {
            return 0;
        }

        const leftSubtreeHeight = calculateTreeHeight(node.left);
        if (leftSubtreeHeight === -1) {
            return -1;
        }

        const rightSubtreeHeight = calculateTreeHeight(node.right);
        if (rightSubtreeHeight === -1) {
            return -1;
        }

        if (Math.abs(rightSubtreeHeight - leftSubtreeHeight) > 1) {
            return -1;
        }

        return 1 + Math.max(rightSubtreeHeight, leftSubtreeHeight);
    };

    return calculateTreeHeight(root) !== -1;
}

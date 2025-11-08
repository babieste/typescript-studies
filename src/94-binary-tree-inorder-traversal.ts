import { BinaryTreeNode as TreeNode } from "../data-structures/binary-tree";

/**
 * ### [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal)
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 * #### Complexity Analysis
 * - Time complexity: It's `O(n)`, with `n` being the number of nodes. Since it's a traversal,
 * every node needs to be visited once.
 * - Space complexity: The `recursiveInorderTraversal` has an implicit call stack of `O(H)`,
 * where H is the tree height. Each loop does `O(1)` computation, thus overall space
 * complexity is `O(H)`.
 */
export function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const answer: number[] = [];

    const recursiveInorderTraversal = (currentNode: TreeNode) => {
        if (currentNode.left) {
            recursiveInorderTraversal(currentNode.left);
        }

        answer.push(currentNode.val);

        if (currentNode.right) {
            recursiveInorderTraversal(currentNode.right);
        }
    };

    recursiveInorderTraversal(root);
    return answer;
}

import { BinaryTreeNode as TreeNode } from "../data-structures/binary-tree";

/**
 * ### [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
 *
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest
 * path from the root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 */
export function minDepth_DFS(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const calculateMinDepth = (node: TreeNode): number => {
        if (!node.left && !node.right) {
            // leaf node found.
            return 1;
        } else if (!node.left) {
            const rightPathDepth = calculateMinDepth(node.right!);
            return 1 + rightPathDepth;
        } else if (!node.right) {
            const leftPathDepth = calculateMinDepth(node.left);
            return 1 + leftPathDepth;
        }

        const leftPath = calculateMinDepth(node.left);
        const rightPath = calculateMinDepth(node.right);

        return 1 + Math.min(leftPath, rightPath);
    };

    return calculateMinDepth(root);
}

export function minDepth_BFS(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const queue = [root];
    let minHeight = 1;

    while (queue.length) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;

            if (!node.left && !node.right) {
                // leaf node found.
                return minHeight;
            }

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        minHeight = minHeight + 1;
    }

    return minHeight;
}

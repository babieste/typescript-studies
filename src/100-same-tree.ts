import { BinaryTreeNode as TreeNode } from "../data-structures/binary-tree";

/**
 * ### [100. Same Tree](https://leetcode.com/problems/same-tree/description/)
 *
 * Given the roots of two binary trees `p` and `q`, write a function to check
 * if they are the same or not. Two binary trees are considered the same if
 * they are structurally identical, and the nodes have the same value.
 *
 * #### Constraints
 * - The number of nodes in both trees is in the range [0, 100]
 * - `-10^4 <= Node.val <= 10^4`
 *
 * #### Complexity Analysis
 * - Time complexity: the algorithm visits each corresponding node in the trees
 * `p` and `q` **at most once**. Each visit involves constant time operations,
 * to compare values. Since the number of recursive calls is proportional to
 * the number of nodes being compared, the time complexity is determined by
 * the total number of nodes visited. In the worst case scenario, where the
 * trees are identical, we visit all nodes. Thus, the time complexity is `O(N)`.
 * - Space complexity: the space complexity is determined by the algorithm's
 * call stack depth size, since it's recursive. In the worst case scenario, where
 * both trees are the same, all levels of the tree are visited, which results in
 * a complexity of `O(H)`, where H is the height of the tree.
 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const traversal = (p: TreeNode | null, q: TreeNode | null): boolean => {
        if (p === null && q === null) {
            return true;
        } else if (p === null) {
            return false;
        } else if (q === null) {
            return false;
        }

        if (p.val !== q.val) {
            return false;
        }

        return traversal(p.left, q.left) && traversal(p.right, q.right);
    };

    return traversal(p, q);
}

export function isSameTree_November2025(
    p: TreeNode | null,
    q: TreeNode | null
): boolean {
    const recursiveIsSameTree = (
        p: TreeNode | null,
        q: TreeNode | null
    ): boolean => {
        if (!p && !q) {
            return true;
        } else if (!p || !q || p?.val !== q?.val) {
            return false;
        }

        return (
            recursiveIsSameTree(p?.left, q?.left) &&
            recursiveIsSameTree(p?.right, q?.right)
        );
    };

    return recursiveIsSameTree(p, q);
}

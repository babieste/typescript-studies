import { BinaryTreeNode as TreeNode } from "../data-structures/binary-tree";

/**
 * ### [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)
 *
 * Given the root of a binary tree, check whether it is a mirror of itself
 * (i.e., symmetric around its center).
 *
 * #### Constraints
 * = The number of nodes in the tree is in the range `[1, 1000]`
 * `-100 <= Node.val <= 100`
 *
 * #### Complexity Analysis
 * - Time complexity: `O(N)` since in the worst case scenario the tree is
 * symmetric, which means all nodes need to be visited at least once.
 * - Space complexity: In the worst case scenario all levels of the tree
 * need to be verified. Thus the callstack space will have a complexity
 * of `O(H)`, where H is the height of the tree.
 */
export function isSymmetric(root: TreeNode | null): boolean {
    const recursiveIsSymmetric = (
        p: TreeNode | null,
        q: TreeNode | null
    ): boolean => {
        if (!p && !q) {
            return true;
        }

        if (!p || !q || p?.val !== q?.val) {
            return false;
        }

        if (!recursiveIsSymmetric(p.left, q.right)) {
            return false;
        }

        if (!recursiveIsSymmetric(p.right, q.left)) {
            return false;
        }

        return true;
    };

    return recursiveIsSymmetric(root?.left ?? null, root?.right ?? null);
}

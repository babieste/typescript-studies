import { BinaryTreeNode as TreeNode } from "../data-structures/binary-tree";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  return traversal(p, q);
}

function traversal(p: TreeNode | null, q: TreeNode | null): boolean {
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
}

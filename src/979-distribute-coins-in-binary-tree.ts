import { BinaryTreeNode } from "../schema/binary-tree";
/**
 * Description: @see https://leetcode.com/problems/distribute-coins-in-binary-tree/description/
 *
 * You are given the `root` of a binary tree with `n` nodes where each `node` in the tree has
 * `node.val` coins. There are `n` coins in total throughout the whole tree.
 *
 * In one move, we may choose two adjacent nodes and move one coin from one node to another.
 * A move may be from parent to child, or from child to parent.
 *
 * Return the minimum number of moves required to make every node have exactly one coin.
 */
export function distributeCoins(root: BinaryTreeNode | null): number {
  let numberOfMoves = 0;

  function depthFirstSearch(node: BinaryTreeNode | null): number {
    if (!node) {
      return 0;
    }

    const leftCoins = depthFirstSearch(node.left);
    const rightCoins = depthFirstSearch(node.right);
    numberOfMoves += Math.abs(leftCoins) + Math.abs(rightCoins);
    return node.val - 1 + leftCoins + rightCoins;
  }

  depthFirstSearch(root);
  return numberOfMoves;
}

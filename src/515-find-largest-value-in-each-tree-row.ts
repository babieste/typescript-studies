import { BinaryTreeNode as TreeNode } from "../data-structures/binary-tree"

/**
 * [515. Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/description)
 * 
 * Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
 */
export function largestValues(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    return breadthFirstSearch(root);
};

/**
 * A complexidade do BFS é `O(n)` porque, embora `shift()` seja `O(n)` individualmente,
 * ele é chamado apenas `n` vezes ao longo de toda a execução do algoritmo. O custo
 * total das operações `shift()` é, portanto, `O(n)`, e não `O(n²)`. Com a correção acima,
 * a complexidade do loop interno (`for`) passa a ser `O(levelSize)`, e como a soma dos
 * `levelSize` em todos os níveis é igual a `n`, a complexidade total da função
 * `breadthFirstSearch` é `O(n)`.
 */
function breadthFirstSearch(root: TreeNode): number[] {
    const queue = [root];
    const largestValues: number[] = [];

    while (queue.length) { // O(n)
        const levelSize = queue.length;
        let maximumLevelValue = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < levelSize; i++) { // O(levelSize)
            const node = queue.shift() as TreeNode; // O(1)
            maximumLevelValue = Math.max(maximumLevelValue, node.val); // O(1)

            if (node.left) {
                queue.push(node.left); // O(1)
            }

            if (node.right) {
                queue.push(node.right); // O(1)
            }
        }

        largestValues.push(maximumLevelValue);
    }

    return largestValues;
}
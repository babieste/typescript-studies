import { BinaryTreeNode as TreeNode } from "../data-structures/binary-tree";

export function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const nodesPerLevel = new Map<number, number[]>();
    const result = [];
    
    levelOrderTraversal(root, 0, nodesPerLevel);

    for (const values of nodesPerLevel.values()) {
        result.push(values);
    }

    return result;
};

function levelOrderTraversal(node: TreeNode, level: number, nodesPerLevel: Map<number, number[]>): void {
    if (nodesPerLevel.has(level)) {
        const nodes = nodesPerLevel.get(level) ?? [];
        nodes.push(node.val);
        nodesPerLevel.set(level, nodes);
    } else {
        nodesPerLevel.set(level, [node.val]);
    }

    if (node.left) {
        levelOrderTraversal(node.left, level + 1, nodesPerLevel);
    }

    if (node.right) {
        levelOrderTraversal(node.right, level + 1, nodesPerLevel);
    }
}
import { BinaryTreeNode as TreeNode } from "../data-structures/binary-tree"

function minimumOperations(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const map = new Map<number, number[]>();
    let minSwaps = 0;

    breadthFirstSearch(root, 0, map);

    for (const nodes of map.values()) {
        minSwaps += swap(nodes);
    }

    return minSwaps;
};

function breadthFirstSearch(node: TreeNode, level: number, map: Map<number, number[]>) {
    insert(map, level, node.val);

    const left = node.left;
    const right = node.right;

    if (left) {
        breadthFirstSearch(left, level + 1, map);
    }

    if (right) {
        breadthFirstSearch(right, level + 1, map);
    }
}

function insert(map: Map<number, number[]>, key: number, value: number | null) {
    if (!value) {
        return;
    }

    if (map.has(key)) {
        const values = map.get(key) ?? [];
        values.push(value);
        map.set(key, values);
    } else {
        map.set(key, [value]);
    }
}

function swap(array: number[]): number {
    const indexedArray = array.map((value, index) => [value, index]);
    const visitedPositions = Array.from({ length: array.length }, () => false);
    let swaps = 0;

    // Sort array by value
    indexedArray.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < array.length; i++) {
        if (visitedPositions[i] === true || indexedArray[i][1] === i) {
            continue;
        }

        let cycleSize = 0;
        let j = i;

        while (visitedPositions[j] === false) {
            visitedPositions[j] = true;
            j = indexedArray[j][1];
            cycleSize += 1;
        }

        if (cycleSize > 0) {
            swaps += cycleSize - 1;
        }
    }

    return swaps;
}

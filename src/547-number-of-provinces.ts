/**
 * ### [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
 *
 * There are `n` cities. Some of them are connected, while some are not. If city `a`
 * is connected directly with city `b`, and city `b` is connected directly with city `c`,
 * then city `a` is connected indirectly with city `c`.
 *
 * A province is a group of directly or indirectly connected cities and no other cities
 * outside of the group.
 *
 * You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the
 * `i`th city and the `j`th city are directly connected, and `isConnected[i][j] = 0` otherwise.
 *
 * Return the total number of provinces.
 *
 * #### Complexity Analysis
 * - Time complexity: time complexity is `O(N^2)` because we have an adjacency matrix as an input,
 * meaning to apply the union-find algorithm we need to iterate every cell.
 * - Space complexity: `O(N)`, since we have `parent` and `rank` auxiliary variables with will
 * contain `N` keys, `N` being the number of nodes.
 */
function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length;
    const parent: Record<number, number> = {};
    const rank: Record<number, number> = {};

    function makeSet(i: number): void {
        parent[i] = i;
        rank[i] = 0;
    }

    function findSet(i: number): number {
        if (parent[i] !== i) {
            parent[i] = findSet(parent[i]);
        }

        return parent[i];
    }

    function union(i: number, j: number): void {
        const setI = findSet(i);
        const setJ = findSet(j);

        // Already in same set.
        if (setI === setJ) {
            return;
        }

        // If setI has a bigger rank, add the setJ to setI
        if (rank[setI] > rank[setJ]) {
            parent[setJ] = setI;
        } else {
            // Otherwise, add setI to setJ
            parent[setI] = setJ;

            if (rank[setI] === rank[setJ]) {
                rank[setJ]++;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        makeSet(i);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j]) {
                union(i, j);
            }
        }
    }

    const provinces = new Set<number>();

    for (let i = 0; i < n; i++) {
        provinces.add(findSet(i));
    }

    return provinces.size;
}

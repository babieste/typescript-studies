/**
 * ### [685. Redudant Connection II](https://leetcode.com/problems/redundant-connection-ii/)
 *
 * In this problem, a rooted tree is a **directed** graph such that, there is exactly one node
 * (the root) for which all other nodes are descendants of this node, plus every node has exactly
 * one parent, except for the root node which has no parents.
 *
 * The given input is a directed graph that started as a rooted tree with `n` nodes (with distinct
 * values from `1` to `n`), with one additional directed edge added. The added edge has two different
 * vertices chosen from `1` to `n`, and was not an edge that already existed.
 *
 * The resulting graph is given as a 2D-array of `edges`. Each element of edges is a pair `[u, v]`
 * that represents a directed edge connecting nodes `u` and `v`, where `u` is a parent of child `v`.
 *
 * Return an edge that can be removed so that the resulting graph is a rooted tree of `n` nodes.
 * If there are multiple answers, return the answer that occurs last in the given 2D-array.
 *
 * #### Reasoning
 * The objective is to find the unecessary edge which causes a cycle. My first though was to calculate
 * all incoming and outgoing degrees for every node. Then I realized only counting the incoming edges
 * was necessary: if any non-root node turns out to have two incoming edges, this means that one of
 * these edges is the culprit.
 *
 * Given that the problem statement says to return the answer that occurs last in the input in the 2D
 * array, after finding both potential unecessary edges, we apply DSU ignoring the second edge. Because
 * if the first edge is valid, we can elimitate it as the culprit and the second edge is the answer.
 *
 * We know that a "falty" node will have exactly two incoming edges because the problem statement says
 * the input is a valid tree, but with that extra edge. That means that every node, except the root,
 * will have exactly one parent (i. e. one incoming edge). This means that only calculating the incoming
 * degrees and applying DSU considering those possible unecessary edges will fail if the cycle is pointed
 * to the root.
 *
 * If the cycle is in the root, there will not have any node with two incoming nodes. In this case, we can
 * just apply DSU normally, without considering no special edges.
 *
 * #### Complexity Analysis
 * - Time complexity: `O(N)`, because even though in the worst case scenario the cycle is in the root and a
 * DSU will be applied to the entire graph, we iterate all nodes to calculate it's degree. The linear
 * complexity surpasses the inverse Ackerman function (`O(α(N))`), which is considered to be constant.
 * - Space complexity: `O(N)`, because we have three variables (`inDegrees`, `parent` and `rank`) that will
 * ocupy a size equivalent to the number of nodes in the graph.
 *
 */
export function findRedundantDirectedConnection(edges: number[][]): number[] {
    const inDegrees: Record<number, number> = {};
    const parent: Record<number, number> = {};
    const rank: Record<number, number> = {};
    const possibleUnecessaryEdges = [];

    function findSet(i: number): number {
        if (parent[i] !== i) {
            parent[i] = findSet(parent[i]);
        }

        return parent[i];
    }

    function union(i: number, j: number): boolean {
        const rootI = findSet(i);
        const rootJ = findSet(j);

        if (parent[rootI] === parent[rootJ]) {
            return false;
        }

        if (rank[rootI] > rank[rootJ]) {
            parent[rootJ] = rootI;
        } else {
            parent[rootI] = rootJ;

            if (rank[rootI] === rank[rootJ]) {
                rank[rootJ]++;
            }
        }

        return true;
    }

    // Make set
    for (let node = 1; node <= edges.length; node++) {
        parent[node] = node;
        rank[node] = 0;
    }

    // If a node is reachable by two nodes, this means that one of both
    // incident edges is redundant. Hence, we need to calculate in-degrees
    // for all nodes.
    for (const [_, v] of edges) {
        inDegrees[v] ??= 0;
        inDegrees[v]++;
    }

    for (const edge of edges) {
        if (inDegrees[edge[1]] === 2) {
            possibleUnecessaryEdges.push(edge);
        }
    }

    // We've found the two possible unecessary edges, now we use DSU to
    // verify which one is the invalid one.
    if (possibleUnecessaryEdges.length === 2) {
        // Let's ignore the last possible unecessary edge, so
        // we can be certain that the first one is not the problem.
        const [firstEdge, secondEdge] = possibleUnecessaryEdges;

        for (const edge of edges) {
            if (edge[0] === secondEdge[0] && edge[1] === secondEdge[1]) {
                continue;
            }

            // If, by ignoring the secondEdge, we still find a cycle,
            // the first possible unecessary edge is the problem.
            if (!union(edge[0], edge[1])) {
                return firstEdge;
            }
        }

        // Otherwise, the second edge is the unecessary one.
        return secondEdge;
    } else {
        // If we haven't found nodes with two incoming edges,
        // We have a cycle directly from the root.
        for (const [u, v] of edges) {
            if (!union(u, v)) {
                return [u, v];
            }
        }
    }

    return [];
}

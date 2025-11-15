/**
 * ### [310. Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/description/)
 *
 * A tree is an undirected graph in which any two vertices are connected by exactly one path.
 * In other words, any connected graph without simple cycles is a tree. Given a tree of `n`
 * nodes labelled from `0` to `n - 1`, and an array of `n - 1` edges where `edges[i] = [ai, bi]`
 * indicates that there is an undirected edge between the two nodes `ai` and `bi` in the tree,
 * you can choose any node of the tree as the root. When you select a node `x` as the root, the
 * result tree has height `h`. Among all possible rooted trees, those with minimum height (i.e.
 * `min(h)`)  are called **minimum height trees** (MHTs).
 *
 * Return a list of all MHTs' root labels. You can return the answer in any order.
 *
 * The height of a rooted tree is the number of edges on the longest downward path between the root
 * and a leaf.
 *
 * #### Constraints
 * - `1 <= n <= 2 * 10^4`
 * - `edges.length == n - 1`
 * - `0 <= ai, bi < n`
 * - `ai != bi`
 * - All the pairs `(ai, bi)` are distinct
 * - The given input is guaranteed to be a tree and there will be no repeated edges
 *
 * #### Reasoning
 * The objective of this problem is to find one or more nodes which, if choosen to
 * be the root of a tree, minimize the generated tree's height. The key insight is
 * that the **center** of the tree minimizes the maximum distance to all other nodes.
 *
 * Leaf nodes can never be optimal roots, because a leaf node is at the "edge" of the
 * tree - choosing it as the root means all other nodes are on one side, maximizing
 * the height.
 *
 * The solution envolves repeatedly removing leaf nodes layer by layer from the outside
 * in. The last remaining nodes are the center of the tree, which form the minimum height
 * trees. This works because the optimal roots are always at the "center" of the graph.
 *
 * #### Complexity Analysis
 * - Time complexity: to create the adjency list and initialize the degree array, both
 * take `O(N)` time as `N` is the number of nodes. The main algorithm involves iterating
 * through all the nodes, starting from the leaf ones, thus `O(N)`.
 * - Space complexity: the auxiliary `degree` array have a size of N. The `graph` map have
 * a size of `O(V + E)`, where V is the number of nodes and E the number of edges. Since the
 * graph is acyclic and all pairs distinct, this can be represented in terms of N: `O(N + N - 1)`,
 * which can be simplified to `O(N)`. Thus, overall space complexity is `O(N)`.
 */
export function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) {
        return [0];
    }

    const degree: number[] = Array.from({ length: n }, () => 0);
    const graph: Record<number, number[]> = {};
    const queue: number[] = [];
    let answer: number[] = [];

    // Build adjacency list
    for (const [u, v] of edges) {
        if (graph[u]?.length) {
            graph[u].push(v);
        } else {
            graph[u] = [v];
        }

        if (graph[v]?.length) {
            graph[v].push(u);
        } else {
            graph[v] = [u];
        }

        degree[u]++;
        degree[v]++;
    }

    // Insert leaf nodes in queue for processing
    for (let node = 0; node < n; node++) {
        if (degree[node] === 1) {
            queue.push(node);
        }
    }

    while (queue.length) {
        const levelSize = queue.length;
        answer = [];

        for (let i = 0; i < levelSize; i++) {
            const u = queue.shift()!;
            answer.push(u);

            for (const v of graph[u]) {
                degree[v]--;

                if (degree[v] === 1) {
                    queue.push(v);
                }
            }
        }
    }

    return answer;
}

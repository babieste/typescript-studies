/**
 * Problem [785. Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)
 *
 * The idea is to try and separate the nodes into two distinct sets, as required for bipartition.
 * If, in the process of verifying all the vertices, we discover that a edge from `graph[u]` to
 * `graph[v]` are on the same "side" (same set), the graph is not bipartite. Otherwise, it is.
 */
export function isBipartite(graph: number[][]): boolean {
  const side = Array(graph.length + 1).fill(-1);
  const queue: number[] = [];

  for (let node = 0; node < graph.length; node++) {
    if (side[node] === -1) {
      side[node] = 1;
      queue.push(node);

      while (queue.length) {
        const u = queue.shift() as number;

        for (const v of graph[u]) {
          if (side[v] === -1) {
            side[v] = 1 - side[u];
            queue.push(v);
          } else if (side[v] === side[u]) {
            return false;
          }
        }
      }
    }
  }

  return true;
}

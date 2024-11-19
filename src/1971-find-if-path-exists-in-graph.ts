/**
 * Problem [1971. Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/description/).
 */
function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const adj = new Map<number, number[]>();

  // Build adjacency list for each vertex.
  for (const [u, v] of edges) {
    if (adj.has(u)) {
      const adjList: number[] = adj.get(u) as number[];
      adjList.push(v);
      adj.set(u, adjList);
    } else {
      adj.set(u, [v]);
    }

    if (adj.has(v)) {
      const adjList: number[] = adj.get(v) as number[];
      adjList.push(u);
      adj.set(v, adjList);
    } else {
      adj.set(v, [u]);
    }
  }

  const queue: number[] = [source];
  const visited: boolean[] = Array(n + 1).fill(false);

  while (queue.length > 0) {
    const u = queue.shift() as number;

    if (u === destination) {
      return true;
    }

    const adjList = adj.get(u) ?? [];

    for (const v of adjList) {
      if (visited[v] === false) {
        queue.push(v);
        visited[v] = true;
      }
    }
  }

  return false;
}
